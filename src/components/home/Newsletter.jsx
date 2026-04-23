const Newsletter = () => {
  return (
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
  )
}

export default Newsletter
