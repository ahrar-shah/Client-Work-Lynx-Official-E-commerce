// utils/githubClient.js
import fetch from "node-fetch";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";

if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
  throw new Error("GitHub environment variables are missing!");
}

// Helper function to call GitHub API
async function githubRequest(path, method = "GET", body = null) {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`, {
    method,
    headers: {
      "Authorization": `token ${GITHUB_TOKEN}`,
      "Accept": "application/vnd.github.v3+json",
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`GitHub API error: ${res.status} - ${errText}`);
  }

  return res.json();
}

// Save file to GitHub (base64 encoded)
export async function saveFile(path, content, message = "update from API") {
  const existing = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`, {
    headers: { "Authorization": `token ${GITHUB_TOKEN}` }
  });
  let sha = null;
  if (existing.ok) {
    const json = await existing.json();
    sha = json.sha;
  }

  const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`, {
    method: "PUT",
    headers: {
      "Authorization": `token ${GITHUB_TOKEN}`,
      "Accept": "application/vnd.github.v3+json",
    },
    body: JSON.stringify({
      message,
      content: Buffer.from(content).toString("base64"),
      branch: GITHUB_BRANCH,
      sha,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to save file: ${res.status} - ${errText}`);
  }

  return res.json();
}

// Read file from GitHub
export async function readFile(path) {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`, {
    headers: { "Authorization": `token ${GITHUB_TOKEN}` }
  });

  if (!res.ok) {
    if (res.status === 404) return null; // File not found
    const errText = await res.text();
    throw new Error(`Failed to read file: ${res.status} - ${errText}`);
  }

  const json = await res.json();
  return Buffer.from(json.content, "base64").toString("utf-8");
}
