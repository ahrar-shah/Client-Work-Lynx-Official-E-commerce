import { getFile } from '../utils/functions';

export default async function handler(req, res) {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'missing id' });
  const path = `data/products/${id}.json`;
  const f = await getFile(path);
  if (!f) return res.status(404).json({ error: 'not found' });
  const product = JSON.parse(Buffer.from(f.content, 'base64').toString());
  res.json({ product });
}
