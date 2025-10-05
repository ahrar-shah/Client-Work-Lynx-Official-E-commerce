// pages/index.js
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Welcome to Lynx Graphics Official</h1>
        <p>We design premium logos for your brand — Car Logos, Shield Logos, Collab Logos & more.</p>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/shop"><a style={buttonStyle}>Shop Now</a></Link>
          <Link href="/login"><a style={buttonStyle}>Login / Signup</a></Link>
        </div>
        <section style={{ marginTop: "3rem" }}>
          <h2>Our Services</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>✅ Car Logos</li>
            <li>✅ Shield Logos</li>
            <li>✅ Collab Logos</li>
            <li>✅ Professionally designed using Illustrator, Figma & AI tools</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

const buttonStyle = {
  margin: "0 1rem",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#1f2937",
  color: "white",
  borderRadius: "0.375rem",
  textDecoration: "none",
};
