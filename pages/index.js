// pages/index.js
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [activeTab, setActiveTab] = useState("process");

  return (
    <>
      <Head>
        <title>Lynx Graphics - Professional Logo Design</title>
        <meta name="description" content="Premium logo design services for brands - Car Logos, Shield Logos, Collab Logos & more" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <div className="home-container">
        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="nav">
              <div className="logo">
                <i className="fas fa-paw"></i>
                <span>Lynx Graphics</span>
              </div>
              <nav className="nav-links">
                <Link href="/"><a>Home</a></Link>
                <Link href="/portfolio"><a>Portfolio</a></Link>
                <Link href="/services"><a>Services</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
                <Link href="/login">
                  <a className="login-btn">
                    <i className="fas fa-user"></i> Login
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  <span className="gradient-text">Premium Logo Design</span>
                  <br />
                  For Your Brand Identity
                </h1>
                <p className="hero-subtitle">
                  We craft distinctive logos that elevate your brand — Car Logos, 
                  Shield Logos, Collab Logos & more with professional expertise.
                </p>
                <div className="hero-buttons">
                  <Link href="/portfolio">
                    <a className="btn btn-primary">
                      <i className="fas fa-eye"></i> View Portfolio
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="btn btn-secondary">
                      <i className="fas fa-paper-plane"></i> Start Project
                    </a>
                  </Link>
                </div>
                <div className="hero-stats">
                  <div className="stat">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Logos Designed</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">Client Satisfaction</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Countries Served</span>
                  </div>
                </div>
              </div>
              <div className="hero-visual">
                <div className="floating-logos">
                  <div className="logo-circle logo-1">
                    <img src="https://i.postimg.cc/90ghH81R/IMG-20251005-WA0041.jpg" alt="Car Logo Design" />
                  </div>
                  <div className="logo-circle logo-2">
                    <img src="https://i.postimg.cc/YqN6R5nM/IMG-20251005-WA0027.jpg" alt="Shield Logo Design" />
                  </div>
                  <div className="logo-circle logo-3">
                    <img src="https://i.postimg.cc/NfGFhZGQ/IMG-20251005-WA0050.jpg" alt="Collab Logo Design" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Logo Design Services</h2>
              <p className="section-subtitle">Professional logo design tailored to your brand's unique identity</p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-car"></i>
                </div>
                <div className="service-image">
                  <img src="https://i.postimg.cc/90ghH81R/IMG-20251005-WA0041.jpg" alt="Car Logo Design" />
                </div>
                <h3>Car Logos</h3>
                <p>Dynamic automotive logos with sleek, powerful designs that capture speed, innovation and luxury for your brand.</p>
                <div className="service-features">
                  <span><i className="fas fa-check"></i> Vector Format</span>
                  <span><i className="fas fa-check"></i> Multiple Revisions</span>
                  <span><i className="fas fa-check"></i> Source Files</span>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="service-image">
                  <img src="https://i.postimg.cc/YqN6R5nM/IMG-20251005-WA0027.jpg" alt="Shield Logo Design" />
                </div>
                <h3>Shield Logos</h3>
                <p>Bold emblem designs that convey strength, protection, and heritage for security, automotive and legacy brands.</p>
                <div className="service-features">
                  <span><i className="fas fa-check"></i> Vector Format</span>
                  <span><i className="fas fa-check"></i> Multiple Revisions</span>
                  <span><i className="fas fa-check"></i> Source Files</span>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="service-image">
                  <img src="https://i.postimg.cc/NfGFhZGQ/IMG-20251005-WA0050.jpg" alt="Collab Logo Design" />
                </div>
                <h3>Collab Logos</h3>
                <p>Creative partnership logos that blend brand identities seamlessly for collaborative ventures and joint projects.</p>
                <div className="service-features">
                  <span><i className="fas fa-check"></i> Vector Format</span>
                  <span><i className="fas fa-check"></i> Multiple Revisions</span>
                  <span><i className="fas fa-check"></i> Source Files</span>
                </div>
              </div>
              
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="service-image">
                  <div className="custom-logo-placeholder">
                    <i className="fas fa-magic"></i>
                  </div>
                </div>
                <h3>Custom Logos</h3>
                <p>Unique designs tailored to your brand's personality, values, and target audience with unlimited creativity.</p>
                <div className="service-features">
                  <span><i className="fas fa-check"></i> Vector Format</span>
                  <span><i className="fas fa-check"></i> Multiple Revisions</span>
                  <span><i className="fas fa-check"></i> Source Files</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="process">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Design Methodology</h2>
              <p className="section-subtitle">Professional process for creating outstanding logos</p>
            </div>
            
            <div className="process-tabs">
              <button 
                className={`tab-button ${activeTab === "process" ? "active" : ""}`}
                onClick={() => setActiveTab("process")}
              >
                <i className="fas fa-sitemap"></i> Design Process
              </button>
              <button 
                className={`tab-button ${activeTab === "methods" ? "active" : ""}`}
                onClick={() => setActiveTab("methods")}
              >
                <i className="fas fa-tools"></i> Methods & Tools
              </button>
              <button 
                className={`tab-button ${activeTab === "challenges" ? "active" : ""}`}
                onClick={() => setActiveTab("challenges")}
              >
                <i className="fas fa-puzzle-piece"></i> Challenges
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === "process" && (
                <div className="process-steps">
                  <div className="step">
                    <div className="step-icon">
                      <i className="fas fa-search"></i>
                    </div>
                    <div className="step-content">
                      <h3>Discovery & Research</h3>
                      <p>We begin by understanding your brand, target audience, competition and industry trends to create a logo that stands out and resonates.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-icon">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <div className="step-content">
                      <h3>Concept Development</h3>
                      <p>Our designers create multiple concepts using sketching and digital tools, exploring different visual directions for your logo.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-icon">
                      <i className="fas fa-edit"></i>
                    </div>
                    <div className="step-content">
                      <h3>Refinement & Feedback</h3>
                      <p>We refine the selected concept, perfecting colors, typography, spacing and details based on your feedback and professional expertise.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-icon">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <div className="step-content">
                      <h3>Final Delivery</h3>
                      <p>You receive the final logo in all required formats (AI, EPS, PNG, JPG, SVG) with a complete brand style guide and usage instructions.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "methods" && (
                <div className="methods-grid">
                  <div className="method-card">
                    <i className="fab fa-adobe"></i>
                    <h3>Adobe Illustrator</h3>
                    <p>Industry-standard vector graphics software for creating scalable, crisp logos that never lose quality.</p>
                  </div>
                  <div className="method-card">
                    <i className="fab fa-figma"></i>
                    <h3>Figma</h3>
                    <p>Collaborative design tool for prototyping, presenting logo concepts and gathering real-time feedback.</p>
                  </div>
                  <div className="method-card">
                    <i className="fas fa-robot"></i>
                    <h3>AI Tools</h3>
                    <p>We leverage AI for inspiration, pattern generation and efficiency while maintaining full creative control.</p>
                  </div>
                  <div className="method-card">
                    <i className="fas fa-pencil-alt"></i>
                    <h3>Hand Sketching</h3>
                    <p>Traditional sketching to explore organic concepts and unique shapes before digital execution.</p>
                  </div>
                </div>
              )}
              
              {activeTab === "challenges" && (
                <div className="challenges-grid">
                  <div className="challenge-card">
                    <i className="fas fa-balance-scale"></i>
                    <h3>Simplicity vs Uniqueness</h3>
                    <p>Creating logos that are simple enough to be memorable yet unique enough to stand out in crowded markets.</p>
                  </div>
                  <div className="challenge-card">
                    <i className="fas fa-expand-alt"></i>
                    <h3>Scalability & Versatility</h3>
                    <p>Designing logos that work equally well on business cards and billboards, in color and black & white.</p>
                  </div>
                  <div className="challenge-card">
                    <i className="fas fa-clock"></i>
                    <h3>Timelessness vs Trends</h3>
                    <p>Creating designs that feel contemporary without becoming dated as design trends change over time.</p>
                  </div>
                  <div className="challenge-card">
                    <i className="fas fa-eye"></i>
                    <h3>Client Vision Alignment</h3>
                    <p>Translating abstract brand values and client ideas into concrete visual representations that communicate effectively.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Elevate Your Brand Identity?</h2>
              <p>Let's create a logo that tells your unique story and connects with your target audience.</p>
              <div className="cta-buttons">
                <Link href="/contact">
                  <a className="btn btn-primary">
                    <i className="fas fa-paper-plane"></i> Get Started Today
                  </a>
                </Link>
                <Link href="/portfolio">
                  <a className="btn btn-secondary">
                    <i className="fas fa-images"></i> View Our Work
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <div className="footer-logo">
                  <i className="fas fa-paw"></i>
                  <span>Lynx Graphics</span>
                </div>
                <p>Professional logo design services for brands worldwide. Creating memorable identities since 2020.</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-behance"></i></a>
                  <a href="#"><i className="fab fa-dribbble"></i></a>
                </div>
              </div>
              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">Car Logos</a></li>
                  <li><a href="#">Shield Logos</a></li>
                  <li><a href="#">Collab Logos</a></li>
                  <li><a href="#">Custom Logos</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contact</h4>
                <ul>
                  <li><i className="fas fa-envelope"></i> hello@lynxgraphics.com</li>
                  <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                  <li><i className="fas fa-map-marker-alt"></i> Worldwide Service</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; Lynx Graphic By <a href="https://as-developers.ct.ws" target="_blank">AS Developers</a> | All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        /* Global Styles */
        .home-container {
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          color: #2d3748;
          line-height: 1.6;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Header Styles */
        .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e2e8f0;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #4a5568;
        }

        .logo i {
          margin-right: 0.5rem;
          color: #667eea;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #4a5568;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #667eea;
        }

        .login-btn {
          background: #667eea;
          color: white !important;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
        }

        .login-btn:hover {
          background: #5a67d8;
          transform: translateY(-2px);
        }

        /* Hero Section */
        .hero {
          padding: 8rem 0 5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(45deg, #fff, #e2e8f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          font-size: 1rem;
        }

        .btn-primary {
          background: white;
          color: #667eea;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .floating-logos {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .logo-circle {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 4px solid white;
          animation: float 6s ease-in-out infinite;
        }

        .logo-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .logo-1 {
          top: 0;
          left: 0;
          animation-delay: 0s;
        }

        .logo-2 {
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          animation-delay: 2s;
        }

        .logo-3 {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        /* Services Section */
        .services {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #718096;
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          font-size: 3rem;
          color: #667eea;
          margin-bottom: 1.5rem;
        }

        .service-image {
          width: 100%;
          height: 200px;
          border-radius: 0.75rem;
          overflow: hidden;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-image img {
          transform: scale(1.05);
        }

        .custom-logo-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
        }

        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2d3748;
        }

        .service-card p {
          color: #718096;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .service-features {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .service-features span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #48bb78;
          font-size: 0.875rem;
          font-weight: 500;
        }

        /* Process Section */
        .process {
          padding: 6rem 0;
          background: white;
        }

        .process-tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 4rem;
          border-bottom: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          color: #718096;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .tab-button:hover {
          color: #4a5568;
        }

        .tab-button.active {
          color: #667eea;
          font-weight: 600;
        }

        .tab-button.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 3px;
          background: #667eea;
          border-radius: 3px 3px 0 0;
        }

        .tab-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .step {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          padding: 2rem;
          background: #f8fafc;
          border-radius: 1rem;
          transition: all 0.3s ease;
        }

        .step:hover {
          background: #edf2f7;
          transform: translateX(10px);
        }

        .step-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50%;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .step-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #2d3748;
        }

        .step-content p {
          color: #718096;
          line-height: 1.7;
        }

        .methods-grid, .challenges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .method-card, .challenge-card {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .method-card:hover, .challenge-card:hover {
          background: #edf2f7;
          transform: translateY(-5px);
        }

        .method-card i, .challenge-card i {
          font-size: 3rem;
          color: #667eea;
          margin-bottom: 1.5rem;
        }

        .method-card h3, .challenge-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2d3748;
        }

        .method-card p, .challenge-card p {
          color: #718096;
          line-height: 1.6;
        }

        /* CTA Section */
        .cta {
          padding: 6rem 0;
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
          color: white;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .cta-content p {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Footer */
        .footer {
          background: #2d3748;
          color: #cbd5e0;
          padding: 4rem 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .footer-logo i {
          margin-right: 0.5rem;
          color: #667eea;
        }

        .footer-section p {
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #4a5568;
          color: white;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: #667eea;
          transform: translateY(-2px);
        }

        .footer-section h4 {
          color: white;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section li {
          margin-bottom: 0.75rem;
        }

        .footer-section a {
          color: #cbd5e0;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-section a:hover {
          color: #667eea;
        }

        .footer-section li i {
          margin-right: 0.5rem;
          width: 20px;
          color: #667eea;
        }

        .footer-bottom {
          border-top: 1px solid #4a5568;
          padding-top: 2rem;
          text-align: center;
        }

        .footer-bottom a {
          color: #667eea;
          text-decoration: none;
        }

        .footer-bottom a:hover {
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-buttons, .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .floating-logos {
            width: 300px;
            height: 300px;
          }
          
          .logo-circle {
            width: 120px;
            height: 120px;
          }
          
          .process-tabs {
            flex-direction: column;
          }
          
          .tab-button {
            justify-content: center;
          }
          
          .step {
            flex-direction: column;
            text-align: center;
          }
          
          .nav-links {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }
          
          .hero {
            padding: 6rem 0 3rem;
          }
          
          .services, .process, .cta {
            padding: 3rem 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}
