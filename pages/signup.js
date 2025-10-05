// pages/signup.js
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Check password strength
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthText = () => {
    const texts = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    return texts[passwordStrength] || "Very Weak";
  };

  const getPasswordStrengthColor = () => {
    const colors = ["#e53e3e", "#ed8936", "#ecc94b", "#48bb78", "#38a169"];
    return colors[passwordStrength] || "#e53e3e";
  };

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(async () => {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: formData.name, 
          email: formData.email, 
          password: formData.password 
        })
      });
      const data = await res.json();
      if (data.ok) {
        router.push("/shop");
      } else {
        alert(data.error || "Signup failed");
      }
      setIsLoading(false);
    }, 1500);
  }

  return (
    <>
      <Head>
        <title>Sign Up - Lynx Graphics</title>
        <meta name="description" content="Create your Lynx Graphics account" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <div className="signup-container">
        {/* Header */}
        <header className="signup-header">
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
                <a href="/login" className="login-btn">
                  <i className="fas fa-sign-in-alt"></i> Login
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="signup-main">
          <div className="signup-background">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
          </div>
          
          <div className="container">
            <div className="signup-content">
              {/* Left Side - Preview */}
              <div className="signup-preview">
                <div className="preview-content">
                  <div className="preview-header">
                    <h2>Join Lynx Graphics Today</h2>
                    <p>Create your account and unlock premium features</p>
                  </div>
                  
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

                  <div className="preview-features">
                    <h3>What you'll get:</h3>
                    <div className="features-list">
                      <div className="feature-item">
                        <i className="fas fa-rocket"></i>
                        <div>
                          <strong>Premium Logo Designs</strong>
                          <span>Access to exclusive design templates</span>
                        </div>
                      </div>
                      <div className="feature-item">
                        <i className="fas fa-download"></i>
                        <div>
                          <strong>Source Files</strong>
                          <span>Get all editable source files</span>
                        </div>
                      </div>
                      <div className="feature-item">
                        <i className="fas fa-infinity"></i>
                        <div>
                          <strong>Unlimited Revisions</strong>
                          <span>Perfect your design with unlimited changes</span>
                        </div>
                      </div>
                      <div className="feature-item">
                        <i className="fas fa-headset"></i>
                        <div>
                          <strong>Priority Support</strong>
                          <span>24/7 dedicated customer support</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="preview-stats">
                    <div className="stat">
                      <div className="stat-number">500+</div>
                      <div className="stat-label">Happy Clients</div>
                    </div>
                    <div className="stat">
                      <div className="stat-number">98%</div>
                      <div className="stat-label">Satisfaction Rate</div>
                    </div>
                    <div className="stat">
                      <div className="stat-number">24/7</div>
                      <div className="stat-label">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="signup-form-container">
                <div className="signup-header-section">
                  <h1>Create Account</h1>
                  <p>Join our community of designers and clients</p>
                </div>

                <form onSubmit={handleSubmit} className="signup-form">
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

                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="fas fa-lock"></i> Password
                    </label>
                    <div className="input-wrapper">
                      <input 
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="Create a strong password" 
                        value={formData.password} 
                        onChange={handleChange}
                        required 
                      />
                      <i className="fas fa-eye input-icon password-toggle"></i>
                    </div>
                    
                    {formData.password && (
                      <div className="password-strength">
                        <div className="strength-bar">
                          <div 
                            className="strength-fill" 
                            style={{ 
                              width: `${(passwordStrength / 4) * 100}%`,
                              backgroundColor: getPasswordStrengthColor()
                            }}
                          ></div>
                        </div>
                        <span className="strength-text">
                          Strength: <strong style={{ color: getPasswordStrengthColor() }}>
                            {getPasswordStrengthText()}
                          </strong>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">
                      <i className="fas fa-lock"></i> Confirm Password
                    </label>
                    <div className="input-wrapper">
                      <input 
                        type="password" 
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password" 
                        value={formData.confirmPassword} 
                        onChange={handleChange}
                        required 
                      />
                      <i className={`fas ${
                        formData.confirmPassword && formData.password === formData.confirmPassword 
                          ? 'fa-check' 
                          : 'fa-times'
                      } input-icon`} 
                         style={{
                           color: formData.confirmPassword 
                             ? (formData.password === formData.confirmPassword ? '#48bb78' : '#e53e3e')
                             : '#a0aec0'
                         }}
                      ></i>
                    </div>
                    
                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                      <div className="error-message">
                        <i className="fas fa-exclamation-circle"></i>
                        Passwords don't match
                      </div>
                    )}
                  </div>

                  <div className="form-options">
                    <label className="checkbox-container">
                      <input 
                        type="checkbox" 
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                      />
                      <span className="checkmark"></span>
                      I agree to the <a href="/terms" target="_blank">Terms of Service</a> and <a href="/privacy" target="_blank">Privacy Policy</a>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className={`signup-btn ${isLoading ? 'loading' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-user-plus"></i>
                        Create Account
                      </>
                    )}
                  </button>

                  <div className="divider">
                    <span>or sign up with</span>
                  </div>

                  <div className="social-signup">
                    <button type="button" className="social-btn google-btn">
                      <i className="fab fa-google"></i>
                      Google
                    </button>
                    <button type="button" className="social-btn facebook-btn">
                      <i className="fab fa-facebook-f"></i>
                      Facebook
                    </button>
                    <button type="button" className="social-btn github-btn">
                      <i className="fab fa-github"></i>
                      GitHub
                    </button>
                  </div>
                </form>

                <div className="signup-footer">
                  <p>
                    Already have an account? <a href="/login" className="login-link">Sign in here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="signup-footer-section">
          <div className="container">
            <p>&copy; Lynx Graphic By <a href="https://as-developers.ct.ws" target="_blank">AS Developers</a> | All Rights Reserved</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        /* Global Styles */
        .signup-container {
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
        .signup-header {
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
        .signup-main {
          padding: 8rem 0 4rem;
          position: relative;
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
        }

        .signup-background {
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
          top: 15%;
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
          bottom: 10%;
          left: 15%;
          animation-delay: 4s;
        }

        .shape-4 {
          width: 60px;
          height: 60px;
          top: 40%;
          right: 15%;
          animation-delay: 1s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .signup-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Preview Section */
        .signup-preview {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          padding: 3rem;
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          height: fit-content;
        }

        .preview-content {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .preview-header {
          text-align: center;
        }

        .preview-header h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .preview-header p {
          font-size: 1.125rem;
          opacity: 0.9;
        }

        .preview-logos {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin: 1rem 0;
        }

        .preview-logo {
          width: 70px;
          height: 70px;
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

        .preview-features h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .feature-item i {
          background: rgba(255, 255, 255, 0.2);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 1rem;
        }

        .feature-item div {
          display: flex;
          flex-direction: column;
        }

        .feature-item strong {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .feature-item span {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        .preview-stats {
          display: flex;
          justify-content: space-around;
          text-align: center;
          margin-top: 1rem;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        /* Form Container */
        .signup-form-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 3rem;
          border-radius: 1.5rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .signup-header-section {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .signup-header-section h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .signup-header-section p {
          color: #718096;
          font-size: 1.125rem;
        }

        /* Form Styles */
        .signup-form {
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

        .password-strength {
          margin-top: 0.5rem;
        }

        .strength-bar {
          width: 100%;
          height: 4px;
          background: #e2e8f0;
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 0.25rem;
        }

        .strength-fill {
          height: 100%;
          transition: all 0.3s ease;
        }

        .strength-text {
          font-size: 0.75rem;
          color: #718096;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #e53e3e;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        .form-options {
          margin: 0.5rem 0;
        }

        .checkbox-container {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
          font-size: 0.875rem;
          color: #4a5568;
          font-weight: 500;
          line-height: 1.4;
        }

        .checkbox-container a {
          color: #667eea;
          text-decoration: none;
        }

        .checkbox-container a:hover {
          text-decoration: underline;
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
          flex-shrink: 0;
          margin-top: 0.125rem;
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

        .signup-btn {
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

        .signup-btn:hover:not(.loading) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .signup-btn.loading {
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

        .social-signup {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 0.5rem;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
        }

        .social-btn:hover {
          border-color: #667eea;
          transform: translateY(-1px);
        }

        .google-btn {
          color: #db4437;
        }

        .facebook-btn {
          color: #1877f2;
        }

        .github-btn {
          color: #333;
        }

        .signup-footer {
          text-align: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #e2e8f0;
        }

        .signup-footer p {
          color: #718096;
        }

        .login-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .login-link:hover {
          color: #5a67d8;
          text-decoration: underline;
        }

        /* Footer */
        .signup-footer-section {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 2rem 0;
          text-align: center;
          color: white;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .signup-footer-section a {
          color: white;
          text-decoration: none;
          font-weight: 600;
        }

        .signup-footer-section a:hover {
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .signup-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .signup-preview {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .signup-main {
            padding: 6rem 0 2rem;
          }
          
          .signup-form-container,
          .signup-preview {
            padding: 2rem;
          }
          
          .social-signup {
            grid-template-columns: 1fr;
          }
          
          .preview-logos {
            gap: 1rem;
          }
          
          .preview-logo {
            width: 50px;
            height: 50px;
          }
          
          .features-list {
            gap: 1rem;
          }
          
          .feature-item {
            gap: 0.75rem;
          }
          
          .feature-item i {
            width: 32px;
            height: 32px;
            font-size: 0.875rem;
          }
          
          .nav-links {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }
          
          .signup-form-container,
          .signup-preview {
            padding: 1.5rem;
          }
          
          .signup-header-section h1 {
            font-size: 2rem;
          }
          
          .preview-header h2 {
            font-size: 1.5rem;
          }
          
          .preview-stats {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
}
