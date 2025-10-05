/**
 * Minimal GitHub Contents API client for read/write files.
 * Uses GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH env vars.
 */
import fetch from 'node-fetch';
const API_ROOT = 'https://api.github.com';

const OWNER = process.env.GITHUB_OWNER;
const REPO = process.env.GITHUB_REPO;
const BRANCH = process.env.GITHUB_BRANCH || 'main';
const TOKEN = process.env.GITHUB_TOKEN;

if (!TOKEN) {
  console.warn('GITHUB_TOKEN not set — GitHub operations will fail');
}

function headers() {
  return {
    Authorization: `token ${TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github+json'
  };
}

export async function getFile(path) {
  const url = `${API_ROOT}/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(path)}?ref=${BRANCH}`;
  const res = await fetch(url, { headers: headers() });
  if (res.status === 200) {
    const data = await res.json();
    // content is base64
    return data;
  } else {
    return null;
  }
}

export async function createOrUpdateFile(path, contentBase64, message) {
  // Check if file exists to include sha
  const existing = await getFile(path);
  const body = {
    message,
    content: contentBase64,
    branch: BRANCH
  };
  if (existing && existing.sha) body.sha = existing.sha;
  const url = `${API_ROOT}/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(path)}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: headers(),
    body: JSON.stringify(body)
  });
  return res.json();
}

export async function listDir(path) {
  const url = `${API_ROOT}/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(path)}?ref=${BRANCH}`;
  const res = await fetch(url, { headers: headers() });
  if (res.status === 200) return res.json();
  return null;
}
