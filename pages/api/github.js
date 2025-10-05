/**
 * To show images on frontend, we expose a small endpoint that fetches the file from GitHub (base64)
 * and returns it with correct content-type.
 */
import { getFile } from '../../utils/functions';

export default async function handler(req, res) {
  const { path } = req.query;
  if (!path) return res.status(400).end('missing path');
  const f = await getFile(path);
  if (!f) return res.status(404).end('not found');
  const content = f.content;
  const buffer = Buffer.from(content, 'base64');
  // try to guess mime by extension
  const ext = path.split('.').pop();
  const mime = ext === 'png' ? 'image/png' : ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'application/octet-stream';
  res.setHeader('Content-Type', mime);
  res.send(buffer);
}
