/**
 * GET: list products
 * POST: add product (admin) - expects base64 image, meta (title, category, price, shortDesc)
 */
import { getFile, listDir, createOrUpdateFile } from '../utils/githubClient';
import { verifyToken } from '../../utils/jwt';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // list files under data/products/
    const dir = await listDir('data/products');
    if (!dir) return res.json({ products: [] });
    const products = [];
    for (const file of dir) {
      if (file.type !== 'file') continue;
      const f = await getFile(`data/products/${file.name}`);
      const content = Buffer.from(f.content, 'base64').toString();
      products.push(JSON.parse(content));
    }
    return res.json({ products });
  }

  if (req.method === 'POST') {
    const token = req.headers.authorization?.replace('Bearer ', '') || null;
    const user = verifyToken(token);
    if (!user || !user.isAdmin) return res.status(403).json({ error: 'Unauthorized' });

    const { title, category, price, shortDesc, imageBase64 } = req.body;
    if (!title || !category || !price || !imageBase64) return res.status(400).json({ error: 'missing' });

    // Save image as file
    const imageName = `data/images/${Date.now()}-${title.replace(/\s+/g,'-')}.png`;
    const imageContent = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    await createOrUpdateFile(imageName, imageContent, `Add product image ${imageName}`);

    const product = {
      id: `prod_${Date.now()}`,
      title,
      category,
      price,
      shortDesc: shortDesc || '',
      imagePath: imageName,
      createdAt: new Date().toISOString()
    };
    const productPath = `data/products/${product.id}.json`;
    await createOrUpdateFile(productPath, Buffer.from(JSON.stringify(product, null, 2)).toString('base64'), `Add product ${product.id}`);

    return res.json({ ok: true, product });
  }
  res.status(405).end();
}
