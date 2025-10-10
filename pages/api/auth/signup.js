// pages/api/auth/signup.js
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { createOrUpdateFile } from "../../../utils/functions"; // path confirm kar lo

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // ✅ Secure hash
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
      isAdmin: false,
    };

    // ✅ Save in GitHub
    await createOrUpdateFile(
      `data/users/${email.replace(/[@.]/g, "_")}.json`,
      Buffer.from(JSON.stringify(userData, null, 2)).toString("base64"),
      `Add user ${email}`
    );

    // ✅ Create JWT
    const token = jwt.sign(
      { email: userData.email, name: userData.name, isAdmin: false },
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "7d" }
    );

    // ✅ Set cookie (httpOnly)
    res.setHeader(
      "Set-Cookie",
      `lynx_token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24 * 7}`
    );

    return res.status(200).json({ ok: true, user: { name, email } });
  } catch (error) {
    console.error("Signup error:", error);
    return res
      .status(500)
      .json({ error: error.message || "Internal server error" });
  }
}
