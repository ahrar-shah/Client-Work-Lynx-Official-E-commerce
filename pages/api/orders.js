import { getFile, createOrUpdateFile, listDir } from '../../utils/functions';
import { verifyToken } from '../../utils/jwt';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export default async function handler(req, res) {
  const method = req.method;

  if (method === 'POST') {
    const token = req.cookies?.lynx_token || req.headers.authorization?.replace('Bearer ', '');
    const user = verifyToken(token);
    if (!user) return res.status(401).json({ error: 'Login required' });

    const { items, paymentMethod, paymentScreenshotBase64, aiLogoName, phoneNumber } = req.body;
    if (!items || !paymentMethod || !paymentScreenshotBase64 || !aiLogoName || !phoneNumber) {
      return res.status(400).json({ error: 'missing fields' });
    }

    const order = {
      id: `order_${Date.now()}`,
      user: { email: user.email, name: user.name, phoneNumber },
      items,
      paymentMethod,
      aiLogoName,
      paymentScreenshotPath: `data/orders/images/${Date.now()}-${user.email}.png`,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const imageContent = paymentScreenshotBase64.replace(/^data:image\/\w+;base64,/, '');
    await createOrUpdateFile(order.paymentScreenshotPath, imageContent, `Add order screenshot ${order.id}`);

    const orderPath = `data/orders/${order.id}.json`;
    await createOrUpdateFile(orderPath, Buffer.from(JSON.stringify(order, null, 2)).toString('base64'), `Add order ${order.id}`);

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `New order ${order.id}`,
        text: `New order placed by ${user.email}. Check admin panel.`,
      });
    } catch (e) {
      console.error('email send fail', e);
    }

    return res.json({ ok: true, orderId: order.id });
  }

  if (method === 'GET') {
    const token = req.headers.authorization?.replace('Bearer ', '') || req.cookies?.lynx_token;
    const user = verifyToken(token);
    if (!user || !user.isAdmin) return res.status(403).json({ error: 'admin only' });

    const dir = await listDir('data/orders');
    const orders = [];
    if (dir) {
      for (const file of dir) {
        if (file.type !== 'file' || !file.name.endsWith('.json')) continue;
        const f = await getFile(`data/orders/${file.name}`);
        const content = Buffer.from(f.content, 'base64').toString();
        orders.push(JSON.parse(content));
      }
    }
    return res.json({ orders });
  }

  if (method === 'PATCH') {
    const token = req.headers.authorization?.replace('Bearer ', '') || req.cookies?.lynx_token;
    const user = verifyToken(token);
    if (!user || !user.isAdmin) return res.status(403).json({ error: 'admin only' });

    const { orderId, status } = req.body;
    if (!orderId || !status) return res.status(400).json({ error: 'missing' });

    const path = `data/orders/${orderId}.json`;
    const f = await getFile(path);
    if (!f) return res.status(404).json({ error: 'order not found' });

    const order = JSON.parse(Buffer.from(f.content, 'base64').toString());
    order.status = status;
    await createOrUpdateFile(path, Buffer.from(JSON.stringify(order, null, 2)).toString('base64'), `Update order ${orderId} status ${status}`);

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: order.user.email,
        subject: `Your order ${orderId} status: ${status}`,
        text: `Hello ${order.user.name}, your order status is now ${status}.`,
      });
    } catch (e) {
      console.error('email fail', e);
    }

    return res.json({ ok: true });
  }

  res.status(405).end();
}
