// pages/api/auth/signup.js
export const config = { runtime: "nodejs" }; // ensure Node.js runtime

import crypto from "crypto";
import jwt from "jsonwebtoken";
import { createOrUpdateFile } from "../../../utils/functions"; // adjust path if needed

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // ✅ Create a secure hash using crypto (no bcryptjs)
    const salt = crypto.randomBytes(16).toString("hex");
    const hashedPassword = crypto
      .pbkdf2Sync(password, salt, 10000, 64, "sha512")
      .toString("hex");

    // user object
    const userData = {
      name,
      email,
      password: hashedPassword,
      salt,
      createdAt: new Date().toISOString(),
    };

    // ✅ Save user file in GitHub repo
    await createOrUpdateFile(
      `data/users/${email.replace(/[@.]/g, "_")}.json`,
      Buffer.from(JSON.stringify(userData, null, 2)).toString("base64"),
      `Add user ${email}`
    );

    // ✅ Create JWT token
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
