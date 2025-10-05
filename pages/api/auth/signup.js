// Signup: stores user in GitHub under data/users/<email>.json
import { createOrUpdateFile, getFile } from '../../utils/github_api_client';
import { signToken } from '../../../utils/jwt';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, email, password } = req.body;
  if (!email || !password || !name) return res.status(400).json({ error: 'Missing fields' });

  const path = `data/users/${email}.json`;
  const existing = await getFile(path);
  if (existing) return res.status(400).json({ error: 'User already exists' });

  const user = { name, email, password /* NOTE: store hashed in prod */ , createdAt: new Date().toISOString(), isAdmin: false };
  const contentBase64 = Buffer.from(JSON.stringify(user, null, 2)).toString('base64');
  await createOrUpdateFile(path, contentBase64, `Add user ${email}`);
  const token = signToken({ email, name, isAdmin: false });
  // set httpOnly cookie
  res.setHeader('Set-Cookie', `lynx_token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24 * 7}`);
  return res.json({ ok: true, user: { name, email } });
}
