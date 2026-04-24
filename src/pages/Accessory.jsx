import ProductSection from '../components/home/ProductSection'
import { allProducts } from '../data/products'

const Accessory = () => {
  const accessories = allProducts.filter((p) => p.category === 'accessory')

  return (
    <div className="page-content">
      <div className="page-hero">
        <div className="section-container">
          <span className="page-hero-icon">🎧</span>
          <h1 className="page-hero-title">Phụ kiện</h1>
          <p className="page-hero-subtitle">
            Tai nghe, sạc, ốp lưng, bàn phím và hàng trăm phụ kiện công nghệ khác
          </p>
        </div>
      </div>
      <ProductSection
        products={accessories}
        title="Phụ kiện nổi bật"
        subtitle="Phụ kiện chất lượng cao với giá ưu đãi"
      />
    </div>
  )
}

export default Accessory
