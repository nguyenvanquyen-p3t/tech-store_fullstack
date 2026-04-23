const Navbar = ({ cartCount = 3, activeLink = 'Trang chủ' }) => {
  const navLinks = [
    { label: 'Trang chủ', href: '#' },
    { label: 'Điện thoại', href: '#' },
    { label: 'Laptop', href: '#' },
    { label: 'Phụ kiện', href: '#' },
    { label: 'Liên hệ', href: '#' },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">TechStore</span>
        </a>

        <nav className="nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link${link.label === activeLink ? ' active' : ''}`}
            >
              {link.label}
            </a>
          ))}
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
            <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
