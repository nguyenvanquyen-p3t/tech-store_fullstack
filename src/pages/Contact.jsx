const Contact = () => {
  return (
    <div className="page-content">
      <div className="page-hero">
        <div className="section-container">
          <span className="page-hero-icon">📬</span>
          <h1 className="page-hero-title">Liên hệ với chúng tôi</h1>
          <p className="page-hero-subtitle">
            Đội ngũ TechStore luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ qua các kênh bên dưới.
          </p>
        </div>
      </div>

      <section className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            {/* Contact Info Cards */}
            <div className="contact-info">
              <div className="contact-card">
                <span className="contact-card-icon">📍</span>
                <h3>Địa chỉ</h3>
                <p>123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</p>
              </div>
              <div className="contact-card">
                <span className="contact-card-icon">📞</span>
                <h3>Điện thoại</h3>
                <p>1900 xxxx xx</p>
                <p>0912 345 678</p>
              </div>
              <div className="contact-card">
                <span className="contact-card-icon">✉️</span>
                <h3>Email</h3>
                <p>support@techstore.vn</p>
                <p>sales@techstore.vn</p>
              </div>
              <div className="contact-card">
                <span className="contact-card-icon">⏰</span>
                <h3>Giờ làm việc</h3>
                <p>Thứ 2 – Chủ nhật</p>
                <p>8:00 – 22:00</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">Gửi tin nhắn cho chúng tôi</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Họ và tên</label>
                    <input type="text" id="contact-name" placeholder="Nguyễn Văn A" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" id="contact-email" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Chủ đề</label>
                  <input type="text" id="contact-subject" placeholder="Tôi cần hỗ trợ về..." />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Nội dung</label>
                  <textarea id="contact-message" rows="5" placeholder="Nhập nội dung tin nhắn..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Gửi tin nhắn</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
