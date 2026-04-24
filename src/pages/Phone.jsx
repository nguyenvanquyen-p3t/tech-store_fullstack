import ProductSection from '../components/home/ProductSection'
import { allProducts } from '../data/products'

const Phone = () => {
  const phones = allProducts.filter((p) => p.category === 'phone')

  return (
    <div className="page-content">
      <div className="page-hero">
        <div className="section-container">
          <span className="page-hero-icon">📱</span>
          <h1 className="page-hero-title">Điện thoại</h1>
          <p className="page-hero-subtitle">
            Khám phá bộ sưu tập điện thoại thông minh mới nhất từ các thương hiệu hàng đầu
          </p>
        </div>
      </div>
      <ProductSection
        products={phones}
        title="Điện thoại nổi bật"
        subtitle="Những chiếc điện thoại được yêu thích nhất tại TechStore"
      />
    </div>
  )
}

export default Phone
