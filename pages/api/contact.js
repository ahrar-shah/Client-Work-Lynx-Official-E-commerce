// pages/api/contact.js
import { createOrUpdateFile } from '../../utils/functions'; // two levels up because pages/api/contact.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const contact = {
    name,
    email,
    subject,
    message,
    createdAt: new Date().toISOString(),
  };

  await createOrUpdateFile(
    `data/contacts/${Date.now()}-${email}.json`,
    Buffer.from(JSON.stringify(contact, null, 2)).toString("base64"),
    `Add contact from ${email}`
  );

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Contact: ${subject || "New message"}`,
      text: `From ${name} <${email}>\n\n${message}`,
      replyTo: email,
    });
  } catch (e) {
    console.error("email fail", e);
  }

  res.json({ ok: true });
}
