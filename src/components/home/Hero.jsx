import bannerImg from '../../assets/banner.png'

const Hero = () => {
  return (
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
  )
}

export default Hero
