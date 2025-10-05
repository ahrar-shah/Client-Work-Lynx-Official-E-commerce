// pages/api/auth/signup.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createOrUpdateFile } from "../../../utils/functions"; // path adjust karo

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // user object
    const userData = {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    };

    // save user file in GitHub repo
    await createOrUpdateFile(
      `data/users/${email.replace(/[@.]/g, "_")}.json`,
      Buffer.from(JSON.stringify(userData, null, 2)).toString("base64"),
      `Add user ${email}`
    );

    // create JWT token
    const token = jwt.sign(
      { email: userData.email },
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "7d" }
    );

    return res.status(200).json({ ok: true, token });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
