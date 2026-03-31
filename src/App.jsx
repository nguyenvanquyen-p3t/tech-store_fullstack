import './App.css'
import bannerImg from './assets/banner.png'
import phoneImg from './assets/phone.png'
import laptopImg from './assets/laptop.png'
import accessoryImg from './assets/accessory.png'

const products = [
  { id: 1, name: 'iPhone 15 Pro Max', price: '34.990.000₫', oldPrice: '39.990.000₫', img: phoneImg, badge: 'Hot' },
  { id: 2, name: 'Samsung Galaxy S24 Ultra', price: '31.990.000₫', oldPrice: '35.990.000₫', img: phoneImg, badge: 'Mới' },
  { id: 3, name: 'MacBook Pro M3 14"', price: '49.990.000₫', oldPrice: '54.990.000₫', img: laptopImg, badge: '-9%' },
  { id: 4, name: 'Laptop Gaming ASUS ROG', price: '42.990.000₫', oldPrice: '47.990.000₫', img: laptopImg, badge: 'Hot' },
  { id: 5, name: 'AirPods Pro 2', price: '5.990.000₫', oldPrice: '6.990.000₫', img: accessoryImg, badge: '-14%' },
  { id: 6, name: 'Tai nghe Sony WH-1000XM5', price: '7.490.000₫', oldPrice: '8.490.000₫', img: accessoryImg, badge: 'Mới' },
  { id: 7, name: 'Xiaomi 14 Ultra', price: '23.990.000₫', oldPrice: '27.990.000₫', img: phoneImg, badge: '-14%' },
  { id: 8, name: 'Dell XPS 15', price: '45.990.000₫', oldPrice: '49.990.000₫', img: laptopImg, badge: 'Hot' },
]

const categories = [
  { icon: '📱', name: 'Điện thoại', count: '120+ sản phẩm' },
  { icon: '💻', name: 'Laptop', count: '85+ sản phẩm' },
  { icon: '🎧', name: 'Phụ kiện', count: '200+ sản phẩm' },
  { icon: '⌚', name: 'Đồng hồ', count: '60+ sản phẩm' },
  { icon: '📺', name: 'Màn hình', count: '45+ sản phẩm' },
  { icon: '🎮', name: 'Gaming', count: '90+ sản phẩm' },
]

function App() {
  return (
    <div className="app">
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">TechStore</span>
          </a>

          <nav className="nav">
            <a href="#" className="nav-link active">Trang chủ</a>
            <a href="#" className="nav-link">Điện thoại</a>
            <a href="#" className="nav-link">Laptop</a>
            <a href="#" className="nav-link">Phụ kiện</a>
            <a href="#" className="nav-link">Liên hệ</a>
          </nav>

          <div className="header-actions">
            <button className="icon-btn" aria-label="Tìm kiếm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button className="icon-btn cart-btn" aria-label="Giỏ hàng">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="cart-count">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* ===== HERO BANNER ===== */}
      <section className="hero">
        <img src={bannerImg} alt="Khuyến mãi lớn" className="hero-img" />
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-badge">🔥 Ưu đãi đặc biệt</span>
            <h1 className="hero-title">Công nghệ mới nhất<br />Giá tốt nhất</h1>
            <p className="hero-subtitle">Giảm đến 50% cho tất cả sản phẩm điện thoại, laptop và phụ kiện công nghệ.</p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">Mua ngay</a>
              <a href="#categories" className="btn btn-outline">Khám phá</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES BAR ===== */}
      <section className="features">
        <div className="features-container">
          <div className="feature-item">
            <span className="feature-icon">🚚</span>
            <div>
              <strong>Giao hàng miễn phí</strong>
              <p>Đơn hàng từ 500K</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔄</span>
            <div>
              <strong>Đổi trả 30 ngày</strong>
              <p>Miễn phí đổi trả</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🛡️</span>
            <div>
              <strong>Bảo hành chính hãng</strong>
              <p>12 tháng bảo hành</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💬</span>
            <div>
              <strong>Hỗ trợ 24/7</strong>
              <p>Tư vấn miễn phí</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="categories" id="categories">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Danh mục sản phẩm</h2>
            <p className="section-subtitle">Khám phá các danh mục sản phẩm công nghệ hàng đầu</p>
          </div>
          <div className="categories-grid">
            {categories.map((cat, idx) => (
              <a href="#" className="category-card" key={idx}>
                <span className="category-icon">{cat.icon}</span>
                <h3 className="category-name">{cat.name}</h3>
                <p className="category-count">{cat.count}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="products" id="products">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Sản phẩm nổi bật</h2>
            <p className="section-subtitle">Những sản phẩm được yêu thích và bán chạy nhất</p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                {product.badge && <span className="product-badge">{product.badge}</span>}
                <div className="product-img-wrapper">
                  <img src={product.img} alt={product.name} className="product-img" />
                  <div className="product-actions">
                    <button className="action-btn" title="Yêu thích">❤️</button>
                    <button className="action-btn" title="Xem nhanh">👁️</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-rating">
                    {'★'.repeat(5)}
                    <span className="rating-count">(128)</span>
                  </div>
                  <div className="product-pricing">
                    <span className="product-price">{product.price}</span>
                    <span className="product-old-price">{product.oldPrice}</span>
                  </div>
                  <button className="btn-add-cart">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="newsletter">
        <div className="section-container">
          <div className="newsletter-content">
            <h2>Đăng ký nhận ưu đãi</h2>
            <p>Nhận thông tin khuyến mãi và sản phẩm mới nhất qua email</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Nhập email của bạn..." className="newsletter-input" />
              <button type="submit" className="btn btn-primary">Đăng ký</button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="#" className="logo footer-logo">
                <span className="logo-icon">⚡</span>
                <span className="logo-text">TechStore</span>
              </a>
              <p className="footer-desc">
                Chuyên cung cấp các sản phẩm công nghệ chính hãng với giá tốt nhất thị trường.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">📘</a>
                <a href="#" className="social-link" aria-label="Instagram">📸</a>
                <a href="#" className="social-link" aria-label="YouTube">▶️</a>
                <a href="#" className="social-link" aria-label="TikTok">🎵</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Sản phẩm</h4>
              <ul>
                <li><a href="#">Điện thoại</a></li>
                <li><a href="#">Laptop</a></li>
                <li><a href="#">Máy tính bảng</a></li>
                <li><a href="#">Phụ kiện</a></li>
                <li><a href="#">Đồng hồ thông minh</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Hỗ trợ</h4>
              <ul>
                <li><a href="#">Hướng dẫn mua hàng</a></li>
                <li><a href="#">Chính sách đổi trả</a></li>
                <li><a href="#">Chính sách bảo hành</a></li>
                <li><a href="#">Câu hỏi thường gặp</a></li>
                <li><a href="#">Liên hệ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Liên hệ</h4>
              <ul className="contact-list">
                <li>📍 123 Nguyễn Huệ, Q.1, TP.HCM</li>
                <li>📞 1900 xxxx xx</li>
                <li>✉️ support@techstore.vn</li>
                <li>⏰ 8:00 - 22:00 (T2 - CN)</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 TechStore. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
