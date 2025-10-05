// pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(async () => {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe })
      });
      const data = await res.json();
      if (data.ok) {
        router.push("/shop");
      } else {
        alert(data.error || "Login failed");
      }
      setIsLoading(false);
    }, 1500);
  }

  return (
    <>
      <Head>
        <title>Login - Lynx Graphics</title>
        <meta name="description" content="Login to your Lynx Graphics account" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <div className="login-container">
        {/* Header */}
        <header className="login-header">
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
                <a href="/contact">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="login-main">
          <div className="login-background">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
          </div>
          
          <div className="container">
            <div className="login-content">
              {/* Left Side - Form */}
              <div className="login-form-container">
                <div className="login-header-section">
                  <h1>Welcome Back</h1>
                  <p>Sign in to your Lynx Graphics account</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i> Email Address
                    </label>
                    <div className="input-wrapper">
                      <input 
                        type="email" 
                        id="email"
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        required 
                      />
                      <i className="fas fa-check input-icon"></i>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="fas fa-lock"></i> Password
                    </label>
                    <div className="input-wrapper">
                      <input 
                        type="password" 
                        id="password"
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        required 
                      />
                      <i className="fas fa-eye input-icon password-toggle"></i>
                    </div>
                  </div>

                  <div className="form-options">
                    <label className="checkbox-container">
                      <input 
                        type="checkbox" 
                        checked={rememberMe}
                        onChange={e => setRememberMe(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      Remember me
                    </label>
                    <a href="/forgot-password" className="forgot-password">
                      Forgot password?
                    </a>
                  </div>

                  <button 
                    type="submit" 
                    className={`login-btn ${isLoading ? 'loading' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Signing In...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sign-in-alt"></i>
                        Sign In
                      </>
                    )}
                  </button>

                  <div className="divider">
                    <span>or continue with</span>
                  </div>

                  <div className="social-login">
                    <button type="button" className="social-btn google-btn">
                      <i className="fab fa-google"></i>
                      Google
                    </button>
                    <button type="button" className="social-btn github-btn">
                      <i className="fab fa-github"></i>
                      GitHub
                    </button>
                  </div>
                </form>

                <div className="login-footer">
                  <p>
                    Don't have an account? <a href="/signup" className="signup-link">Sign up now</a>
                  </p>
                </div>
              </div>

              {/* Right Side - Preview */}
              <div className="login-preview">
                <div className="preview-content">
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
                  <div className="preview-text">
                    <h3>Join 500+ Happy Clients</h3>
                    <p>Access your premium logo designs, project files, and exclusive content</p>
                    <div className="preview-features">
                      <div className="feature">
                        <i className="fas fa-check"></i>
                        <span>Unlimited Revisions</span>
                      </div>
                      <div className="feature">
                        <i className="fas fa-check"></i>
                        <span>Source Files Included</span>
                      </div>
                      <div className="feature">
                        <i className="fas fa-check"></i>
                        <span>Priority Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="login-footer-section">
          <div className="container">
            <p>&copy; Lynx Graphic By <a href="https://as-developers.ct.ws" target="_blank">AS Developers</a> | All Rights Reserved</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        /* Global Styles */
        .login-container {
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
        .login-header {
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

        /* Main Content */
        .login-main {
          padding: 8rem 0 4rem;
          position: relative;
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
        }

        .login-background {
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
          width: 100px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        .shape-4 {
          width: 120px;
          height: 120px;
          top: 30%;
          right: 20%;
          animation-delay: 1s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .login-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Form Container */
        .login-form-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 3rem;
          border-radius: 1.5rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .login-header-section {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .login-header-section h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .login-header-section p {
          color: #718096;
          font-size: 1.125rem;
        }

        /* Form Styles */
        .login-form {
          display: flex;
          flex-direction: column;
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

        .input-wrapper {
          position: relative;
        }

        .input-wrapper input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.75rem;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #f8fafc;
        }

        .input-wrapper input:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .input-wrapper input::placeholder {
          color: #a0aec0;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #a0aec0;
          transition: color 0.3s ease;
        }

        .input-wrapper input:focus + .input-icon {
          color: #667eea;
        }

        .password-toggle {
          cursor: pointer;
          right: 1rem;
          left: auto;
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0.5rem 0;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          color: #4a5568;
          font-weight: 500;
        }

        .checkbox-container input {
          display: none;
        }

        .checkmark {
          width: 18px;
          height: 18px;
          border: 2px solid #cbd5e0;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .checkbox-container input:checked + .checkmark {
          background: #667eea;
          border-color: #667eea;
        }

        .checkbox-container input:checked + .checkmark::after {
          content: '✓';
          color: white;
          font-size: 12px;
          font-weight: bold;
        }

        .forgot-password {
          color: #667eea;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .forgot-password:hover {
          color: #5a67d8;
          text-decoration: underline;
        }

        .login-btn {
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

        .login-btn:hover:not(.loading) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .login-btn.loading {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .divider {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
          color: #a0aec0;
          font-size: 0.875rem;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }

        .divider span {
          padding: 0 1rem;
        }

        .social-login {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 1rem;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          border-color: #667eea;
          transform: translateY(-1px);
        }

        .google-btn {
          color: #db4437;
        }

        .github-btn {
          color: #333;
        }

        .login-footer {
          text-align: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #e2e8f0;
        }

        .login-footer p {
          color: #718096;
        }

        .signup-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .signup-link:hover {
          color: #5a67d8;
          text-decoration: underline;
        }

        /* Preview Section */
        .login-preview {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          padding: 3rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }

        .preview-content {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .preview-logos {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
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

        .preview-text {
          text-align: center;
        }

        .preview-text h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .preview-text p {
          font-size: 1.125rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .preview-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1rem;
        }

        .feature i {
          color: #48bb78;
          width: 20px;
        }

        /* Footer */
        .login-footer-section {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 2rem 0;
          text-align: center;
          color: white;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .login-footer-section a {
          color: white;
          text-decoration: none;
          font-weight: 600;
        }

        .login-footer-section a:hover {
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .login-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .login-preview {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .login-main {
            padding: 6rem 0 2rem;
          }
          
          .login-form-container,
          .login-preview {
            padding: 2rem;
          }
          
          .social-login {
            grid-template-columns: 1fr;
          }
          
          .preview-logos {
            gap: 1rem;
          }
          
          .preview-logo {
            width: 60px;
            height: 60px;
          }
          
          .nav-links {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }
          
          .login-form-container,
          .login-preview {
            padding: 1.5rem;
          }
          
          .login-header-section h1 {
            font-size: 2rem;
          }
          
          .form-options {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}
