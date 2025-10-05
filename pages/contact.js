// pages/contact.js
import { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [resultType, setResultType] = useState(""); // "success" or "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setResultType("");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.ok) {
        setResult("Your message has been sent successfully! We'll get back to you within 24 hours.");
        setResultType("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setResult("Error: " + (data.error || "Something went wrong. Please try again."));
        setResultType("error");
      }
    } catch (err) {
      setResult("Error: " + err.message);
      setResultType("error");
    }
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Contact Us - Lynx Graphics</title>
        <meta name="description" content="Get in touch with Lynx Graphics for premium logo design services" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <div className="contact-container">
        {/* Header */}
        <header className="contact-header">
          <div className="container">
            <div className="nav">
              <div className="logo">
                <i className="fas fa-paw"></i>
                <span>Lynx Graphics</span>
              </div>
              <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/services">Services</a>
                <a href="/login" className="login-btn">
                  <i className="fas fa-sign-in-alt"></i> Login
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="contact-main">
          <div className="contact-background">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
          </div>
          
          <div className="container">
            <div className="contact-content">
              {/* Left Side - Contact Info */}
              <div className="contact-info">
                <div className="contact-header-section">
                  <h1>Let's Create Something Amazing Together</h1>
                  <p>Get in touch with us to discuss your logo design project. We're here to bring your vision to life.</p>
                </div>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="method-content">
                      <h3>Email Us</h3>
                      <p>hello@lynxgraphics.com</p>
                      <span>We'll respond within 24 hours</span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="method-content">
                      <h3>Call Us</h3>
                      <p>+1 (555) 123-4567</p>
                      <span>Mon-Fri from 9am to 6pm</span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <i className="fas fa-comments"></i>
                    </div>
                    <div className="method-content">
                      <h3>Live Chat</h3>
                      <p>Available 24/7</p>
                      <span>Get instant answers</span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="method-content">
                      <h3>Visit Us</h3>
                      <p>123 Design Street</p>
                      <span>Creative District, CA 90210</span>
                    </div>
                  </div>
                </div>

                <div className="social-contact">
                  <h3>Follow Us</h3>
                  <div className="social-links">
                    <a href="#" className="social-link">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-dribbble"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-link">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className="portfolio-preview">
                  <h3>Recent Work</h3>
                  <div className="preview-logos">
                    <div className="preview-logo">
                      <img src="https://i.postimg.cc/90ghH81R/IMG-20251005-WA0041.jpg" alt="Car Logo" />
                    </div>
                    <div className="preview-logo">
                      <img src="https://i.postimg.cc/YqN6R5nM/IMG-20251005-WA0027.jpg" alt="Shield Logo" />
                    </div>
                    <div className="preview-logo">
                      <img src="https://i.postimg.cc/NfGFhZGQ/IMG-20251005-WA0050.jpg" alt="Collab Logo" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="contact-form-container">
                <div className="form-header">
                  <h2>Send us a Message</h2>
                  <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        <i className="fas fa-user"></i> Full Name
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <i className="fas fa-check input-icon"></i>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        <i className="fas fa-envelope"></i> Email Address
                      </label>
                      <div className="input-wrapper">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <i className="fas fa-check input-icon"></i>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      <i className="fas fa-tag"></i> Subject
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      <i className="fas fa-tag input-icon"></i>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <i className="fas fa-edit"></i> Your Message
                    </label>
                    <div className="textarea-wrapper">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                      <i className="fas fa-edit textarea-icon"></i>
                    </div>
                    <div className="char-count">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className={`submit-btn ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                {result && (
                  <div className={`result-message ${resultType}`}>
                    <i className={`fas ${
                      resultType === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'
                    }`}></i>
                    {result}
                  </div>
                )}

                <div className="form-footer">
                  <div className="guarantee">
                    <i className="fas fa-shield-alt"></i>
                    <div>
                      <strong>100% Satisfaction Guaranteed</strong>
                      <span>We'll work until you're completely happy with your design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-grid">
                <div className="faq-item">
                  <h3><i className="fas fa-clock"></i> How long does a logo design take?</h3>
                  <p>Typically 3-7 business days depending on complexity and revisions. Rush delivery available.</p>
                </div>
                <div className="faq-item">
                  <h3><i className="fas fa-money-bill-wave"></i> What's your pricing structure?</h3>
                  <p>We offer packages starting from $299. Custom quotes available for complex projects.</p>
                </div>
                <div className="faq-item">
                  <h3><i className="fas fa-sync-alt"></i> How many revisions do I get?</h3>
                  <p>All packages include unlimited revisions until you're 100% satisfied with the design.</p>
                </div>
                <div className="faq-item">
                  <h3><i className="fas fa-file-download"></i> What files will I receive?</h3>
                  <p>You'll get all source files (AI, EPS) plus PNG, JPG, SVG formats for web and print.</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="contact-footer-section">
          <div className="container">
            <p>&copy; Lynx Graphic By <a href="https://as-developers.ct.ws" target="_blank">AS Developers</a> | All Rights Reserved</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        /* Global Styles */
        .contact-container {
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Header Styles */
        .contact-header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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

        /* Main Content */
        .contact-main {
          padding: 8rem 0 4rem;
          position: relative;
          min-height: calc(100vh - 200px);
        }

        .contact-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 1;
        }

        .floating-shapes {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 120px;
          height: 120px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 80px;
          height: 80px;
          top: 70%;
          right: 8%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 15%;
          animation-delay: 4s;
        }

        .shape-4 {
          width: 60px;
          height: 60px;
          top: 30%;
          right: 20%;
          animation-delay: 1s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          position: relative;
          z-index: 2;
          margin-bottom: 4rem;
        }

        /* Contact Info Section */
        .contact-info {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          padding: 3rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }

        .contact-header-section {
          margin-bottom: 3rem;
        }

        .contact-header-section h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .contact-header-section p {
          font-size: 1.125rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .method-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .method-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .method-content p {
          font-size: 1.125rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .method-content span {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        .social-contact {
          margin-bottom: 3rem;
        }

        .social-contact h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: white;
          font-size: 1.25rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .portfolio-preview h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .preview-logos {
          display: flex;
          gap: 1rem;
        }

        .preview-logo {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .preview-logo:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.6);
        }

        .preview-logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Contact Form Section */
        .contact-form-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 3rem;
          border-radius: 1.5rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .form-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .form-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .form-header p {
          color: #718096;
          font-size: 1.125rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #4a5568;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-group label i {
          color: #667eea;
          width: 16px;
        }

        .input-wrapper, .textarea-wrapper {
          position: relative;
        }

        .input-wrapper input, .textarea-wrapper textarea {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.75rem;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #f8fafc;
          font-family: inherit;
        }

        .textarea-wrapper textarea {
          resize: vertical;
          min-height: 120px;
        }

        .input-wrapper input:focus, .textarea-wrapper textarea:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .input-wrapper input::placeholder, .textarea-wrapper textarea::placeholder {
          color: #a0aec0;
        }

        .input-icon, .textarea-icon {
          position: absolute;
          left: 1rem;
          top: 1rem;
          color: #a0aec0;
          transition: color 0.3s ease;
        }

        .input-wrapper input:focus + .input-icon,
        .textarea-wrapper textarea:focus + .textarea-icon {
          color: #667eea;
        }

        .char-count {
          text-align: right;
          font-size: 0.75rem;
          color: #a0aec0;
          margin-top: 0.25rem;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-btn:hover:not(.loading) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .submit-btn.loading {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .result-message {
          padding: 1rem;
          border-radius: 0.75rem;
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 500;
        }

        .result-message.success {
          background: #f0fff4;
          color: #22543d;
          border: 1px solid #9ae6b4;
        }

        .result-message.error {
          background: #fed7d7;
          color: #742a2a;
          border: 1px solid #feb2b2;
        }

        .form-footer {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #e2e8f0;
        }

        .guarantee {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #4a5568;
        }

        .guarantee i {
          color: #48bb78;
          font-size: 1.5rem;
        }

        .guarantee strong {
          display: block;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .guarantee span {
          font-size: 0.875rem;
          color: #718096;
        }

        /* FAQ Section */
        .faq-section {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          padding: 3rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }

        .faq-section h2 {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .faq-item h3 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .faq-item h3 i {
          color: #667eea;
        }

        .faq-item p {
          opacity: 0.9;
          line-height: 1.6;
        }

        /* Footer */
        .contact-footer-section {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 2rem 0;
          text-align: center;
          color: white;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-footer-section a {
          color: white;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-footer-section a:hover {
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-main {
            padding: 6rem 0 2rem;
          }
          
          .contact-info,
          .contact-form-container,
          .faq-section {
            padding: 2rem;
          }
          
          .contact-header-section h1 {
            font-size: 2rem;
          }
          
          .form-header h2 {
            font-size: 1.75rem;
          }
          
          .faq-section h2 {
            font-size: 1.75rem;
          }
          
          .nav-links {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }
          
          .contact-info,
          .contact-form-container,
          .faq-section {
            padding: 1.5rem;
          }
          
          .contact-method {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .method-icon {
            align-self: center;
          }
          
          .preview-logos {
            justify-content: center;
          }
          
          .preview-logo {
            width: 60px;
            height: 60px;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
