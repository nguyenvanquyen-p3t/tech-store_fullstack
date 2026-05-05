const features = [
  { icon: '🚚', title: 'Giao hàng miễn phí', desc: 'Đơn hàng từ 500K' },
  { icon: '🔄', title: 'Đổi trả 30 ngày', desc: 'Miễn phí đổi trả' },
  { icon: '🛡️', title: 'Bảo hành chính hãng', desc: '12 tháng bảo hành' },
  { icon: '💬', title: 'Hỗ trợ 24/7', desc: 'Tư vấn miễn phí' },
]

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        {features.map((feature, idx) => (
          <div className="feature-item" key={idx}>
            <span className="feature-icon">{feature.icon}</span>
            <div>
              <strong>{feature.title}</strong>
              <p>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
