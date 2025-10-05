import fetch from "node-fetch";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";

if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
  throw new Error("Missing GitHub env vars");
}

export async function readFile(path) {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`, {
    headers: { "Authorization": `token ${GITHUB_TOKEN}` }
  });
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error("GitHub readFile failed: " + res.statusText);
  }
  const data = await res.json();
  return Buffer.from(data.content, "base64").toString("utf8");
}

export async function saveFile(path, content, message = "update file") {
  // get existing sha
  const infoRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`, {
    headers: { "Authorization": `token ${GITHUB_TOKEN}` }
  });
  let sha = null;
  if (infoRes.ok) {
    const info = await infoRes.json();
    sha = info.sha;
  }
  const putRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`, {
    method: "PUT",
    headers: {
      "Authorization": `token ${GITHUB_TOKEN}`,
      "Accept": "application/vnd.github.v3+json"
    },
    body: JSON.stringify({
      message,
      content: Buffer.from(content).toString("base64"),
      branch: GITHUB_BRANCH,
      sha
    })
  });
  if (!putRes.ok) {
    throw new Error("GitHub saveFile failed: " + await putRes.text());
  }
  return putRes.json();
}
