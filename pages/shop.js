// pages/shop.js
import { useState, useEffect } from 'react';
import Head from 'next/head';

// Mock data for products
const mockProducts = [
  {
    id: 1,
    name: "Premium Car Logo",
    price: 299,
    category: "car",
    image: "https://i.postimg.cc/90ghH81R/IMG-20251005-WA0041.jpg",
    description: "Professional car logo design with vector files",
    features: ["3 Concepts", "Unlimited Revisions", "Source Files", "24-48hr Delivery"],
    popular: true
  },
  {
    id: 2,
    name: "Shield Logo Package",
    price: 349,
    category: "shield",
    image: "https://i.postimg.cc/YqN6R5nM/IMG-20251005-WA0027.jpg",
    description: "Bold shield logo design for security brands",
    features: ["4 Concepts", "Unlimited Revisions", "Source Files", "Brand Guide"],
    popular: false
  },
  {
    id: 3,
    name: "Collaboration Logo",
    price: 399,
    category: "collab",
    image: "https://i.postimg.cc/NfGFhZGQ/IMG-20251005-WA0050.jpg",
    description: "Creative partnership logo for joint ventures",
    features: ["5 Concepts", "Unlimited Revisions", "Source Files", "Stationery Design"],
    popular: true
  },
  {
    id: 4,
    name: "Startup Logo Package",
    price: 199,
    category: "basic",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400",
    description: "Perfect logo package for new businesses",
    features: ["2 Concepts", "3 Revisions", "Source Files", "Basic Support"],
    popular: false
  },
  {
    id: 5,
    name: "Enterprise Logo Suite",
    price: 599,
    category: "premium",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400",
    description: "Complete branding package for established companies",
    features: ["8 Concepts", "Unlimited Revisions", "Full Brand Guide", "Priority Support"],
    popular: true
  },
  {
    id: 6,
    name: "E-sports Team Logo",
    price: 279,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
    description: "Dynamic logo design for gaming teams",
    features: ["3 Concepts", "5 Revisions", "Source Files", "Social Media Kit"],
    popular: false
  }
];

export default function Shop() {
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', icon: 'fas fa-th' },
    { id: 'car', name: 'Car Logos', icon: 'fas fa-car' },
    { id: 'shield', name: 'Shield Logos', icon: 'fas fa-shield-alt' },
    { id: 'collab', name: 'Collab Logos', icon: 'fas fa-handshake' },
    { id: 'premium', name: 'Premium', icon: 'fas fa-crown' },
    { id: 'gaming', name: 'Gaming', icon: 'fas fa-gamepad' }
  ];

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, sortBy, searchTerm, products]);

  const filterProducts = () => {
    setLoading(true);
    
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'popular':
        filtered = [...filtered].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
    setTimeout(() => setLoading(false), 300);
  };

  const addToCart = (product) => {
    // Here you would typically add to cart logic
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <>
      <Head>
        <title>Shop - Lynx Graphics</title>
        <meta name="description" content="Browse our premium logo design packages and services" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <div className="shop-container">
        {/* Header */}
        <header className="shop-header">
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
                <a href="/cart" className="cart-btn">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="cart-count">0</span>
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="shop-hero">
          <div className="container">
            <div className="hero-content">
              <h1>Premium Logo Design Packages</h1>
              <p>Choose from our expertly crafted logo design packages. Each package includes source files and unlimited revisions.</p>
              <div className="hero-stats">
                <div className="stat">
                  <i className="fas fa-check-circle"></i>
                  <span>500+ Logos Designed</span>
                </div>
                <div className="stat">
                  <i className="fas fa-smile"></i>
                  <span>98% Client Satisfaction</span>
                </div>
                <div className="stat">
                  <i className="fas fa-clock"></i>
                  <span>24-48hr Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="shop-main">
          <div className="container">
            {/* Filters and Search */}
            <div className="shop-controls">
              <div className="search-box">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search logos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="filters">
                <div className="filter-group">
                  <label><i className="fas fa-filter"></i> Category:</label>
                  <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label><i className="fas fa-sort"></i> Sort by:</label>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="category-tabs">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`tab ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <i className={category.icon}></i>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Loading State */}
            {loading && (
              <div className="loading-state">
                <i className="fas fa-spinner fa-spin"></i>
                <p>Finding perfect designs...</p>
              </div>
            )}

            {/* Products Grid */}
            <div className="products-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={product.id} className="product-card">
                    {product.popular && <div className="popular-badge">Most Popular</div>}
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                      <div className="product-overlay">
                        <button 
                          className="quick-view-btn"
                          onClick={() => alert(`Quick view: ${product.name}`)}
                        >
                          <i className="fas fa-eye"></i>
                          Quick View
                        </button>
                      </div>
                    </div>
                    
                    <div className="product-content">
                      <div className="product-header">
                        <h3>{product.name}</h3>
                        <div className="price">${product.price}</div>
                      </div>
                      
                      <p className="product-description">{product.description}</p>
                      
                      <div className="product-features">
                        {product.features.map((feature, index) => (
                          <span key={index} className="feature">
                            <i className="fas fa-check"></i>
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="product-actions">
                        <button 
                          className="add-to-cart-btn"
                          onClick={() => addToCart(product)}
                        >
                          <i className="fas fa-shopping-cart"></i>
                          Add to Cart
                        </button>
                        <button className="details-btn">
                          <i className="fas fa-info-circle"></i>
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-products">
                  <i className="fas fa-search"></i>
                  <h3>No products found</h3>
                  <p>Try adjusting your search or filters</p>
                  <button 
                    className="reset-btn"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchTerm('');
                      setSortBy('default');
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* Promotional Banner */}
            <div className="promo-banner">
              <div className="promo-content">
                <div className="promo-text">
                  <h3>Custom Logo Design</h3>
                  <p>Need something unique? Get a custom quote for your specific requirements.</p>
                  <button className="promo-btn">
                    <i className="fas fa-pencil-alt"></i>
                    Get Custom Quote
                  </button>
                </div>
                <div className="promo-image">
                  <i className="fas fa-magic"></i>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="shop-footer-section">
          <div className="container">
            <p>&copy; Lynx Graphic By <a href="https://as-developers.ct.ws" target="_blank">AS Developers</a> | All Rights Reserved</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        /* Global Styles */
        .shop-container {
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Header Styles */
        .shop-header {
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

        .cart-btn {
          position: relative;
          background: #667eea;
          color: white !important;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #e53e3e;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 600;
        }

        /* Hero Section */
        .shop-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .hero-content p {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.125rem;
        }

        .stat i {
          color: #48bb78;
        }

        /* Main Content */
        .shop-main {
          padding: 3rem 0;
        }

        /* Shop Controls */
        .shop-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .search-box {
          position: relative;
          flex: 1;
          max-width: 400px;
        }

        .search-box i {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #a0aec0;
        }

        .search-box input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.75rem;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        .search-box input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .filters {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-group label {
          font-weight: 600;
          color: #4a5568;
          white-space: nowrap;
        }

        .filter-group select {
          padding: 0.5rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.5rem;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-group select:focus {
          outline: none;
          border-color: #667eea;
        }

        /* Category Tabs */
        .category-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          color: #4a5568;
        }

        .tab:hover {
          border-color: #667eea;
          color: #667eea;
        }

        .tab.active {
          background: #667eea;
          border-color: #667eea;
          color: white;
        }

        /* Loading State */
        .loading-state {
          text-align: center;
          padding: 4rem;
          color: #718096;
        }

        .loading-state i {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .product-card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .popular-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          color: #744210;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          z-index: 2;
        }

        .product-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .product-card:hover .product-overlay {
          opacity: 1;
        }

        .quick-view-btn {
          background: white;
          color: #2d3748;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .quick-view-btn:hover {
          background: #667eea;
          color: white;
        }

        .product-content {
          padding: 1.5rem;
        }

        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .product-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0;
        }

        .price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #667eea;
        }

        .product-description {
          color: #718096;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .product-features {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #4a5568;
        }

        .feature i {
          color: #48bb78;
          width: 16px;
        }

        .product-actions {
          display: flex;
          gap: 0.75rem;
        }

        .add-to-cart-btn, .details-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .add-to-cart-btn {
          background: #667eea;
          color: white;
        }

        .add-to-cart-btn:hover {
          background: #5a67d8;
          transform: translateY(-2px);
        }

        .details-btn {
          background: #e2e8f0;
          color: #4a5568;
        }

        .details-btn:hover {
          background: #cbd5e0;
          transform: translateY(-2px);
        }

        /* No Products State */
        .no-products {
          text-align: center;
          padding: 4rem 2rem;
          grid-column: 1 / -1;
        }

        .no-products i {
          font-size: 3rem;
          color: #a0aec0;
          margin-bottom: 1rem;
        }

        .no-products h3 {
          font-size: 1.5rem;
          color: #4a5568;
          margin-bottom: 0.5rem;
        }

        .no-products p {
          color: #718096;
          margin-bottom: 2rem;
        }

        .reset-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .reset-btn:hover {
          background: #5a67d8;
          transform: translateY(-2px);
        }

        /* Promo Banner */
        .promo-banner {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 1rem;
          padding: 3rem;
          color: white;
        }

        .promo-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .promo-text h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .promo-text p {
          font-size: 1.125rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .promo-btn {
          background: white;
          color: #667eea;
          border: none;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .promo-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }

        .promo-image {
          text-align: center;
        }

        .promo-image i {
          font-size: 4rem;
          opacity: 0.8;
        }

        /* Footer */
        .shop-footer-section {
          background: #2d3748;
          color: #cbd5e0;
          padding: 2rem 0;
          text-align: center;
        }

        .shop-footer-section a {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
        }

        .shop-footer-section a:hover {
          text-decoration: underline;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .shop-hero {
            padding: 6rem 0 3rem;
          }
          
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .hero-stats {
            gap: 1.5rem;
          }
          
          .shop-controls {
            flex-direction: column;
            align-items: stretch;
          }
          
          .search-box {
            max-width: none;
          }
          
          .filters {
            justify-content: space-between;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .promo-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .category-tabs {
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }
          
          .nav-links {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }
          
          .product-actions {
            flex-direction: column;
          }
          
          .promo-banner {
            padding: 2rem;
          }
          
          .promo-text h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
