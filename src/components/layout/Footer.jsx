const Footer = () => {
  const productLinks = [
    { label: 'Điện thoại', href: '#' },
    { label: 'Laptop', href: '#' },
    { label: 'Máy tính bảng', href: '#' },
    { label: 'Phụ kiện', href: '#' },
    { label: 'Đồng hồ thông minh', href: '#' },
  ]

  const supportLinks = [
    { label: 'Hướng dẫn mua hàng', href: '#' },
    { label: 'Chính sách đổi trả', href: '#' },
    { label: 'Chính sách bảo hành', href: '#' },
    { label: 'Câu hỏi thường gặp', href: '#' },
    { label: 'Liên hệ', href: '#' },
  ]

  const socialLinks = [
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '📸', label: 'Instagram', href: '#' },
    { icon: '▶️', label: 'YouTube', href: '#' },
    { icon: '🎵', label: 'TikTok', href: '#' },
  ]

  const contactItems = [
    '📍 123 Nguyễn Huệ, Q.1, TP.HCM',
    '📞 1900 xxxx xx',
    '✉️ support@techstore.vn',
    '⏰ 8:00 - 22:00 (T2 - CN)',
  ]

  return (
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
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Sản phẩm</h4>
            <ul>
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Hỗ trợ</h4>
            <ul>
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Liên hệ</h4>
            <ul className="contact-list">
              {contactItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 TechStore. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
