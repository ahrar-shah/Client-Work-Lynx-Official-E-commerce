import { getFile } from '../../utils/githubclient';
import { signToken } from '../../../utils/jwt';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' });

  const path = `data/users/${email}.json`;
  const userFile = await getFile(path);
  if (!userFile) return res.status(401).json({ error: 'Invalid credentials' });
  const content = Buffer.from(userFile.content, 'base64').toString();
  const user = JSON.parse(content);
  // NOTE: In production use hashed passwords
  if (user.password !== password) return res.status(401).json({ error: 'Invalid credentials' });

  const token = signToken({ email: user.email, name: user.name, isAdmin: !!user.isAdmin });
  res.setHeader('Set-Cookie', `lynx_token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24 * 7}`);
  return res.json({ ok: true, user: { name: user.name, email: user.email, isAdmin: !!user.isAdmin } });
}
