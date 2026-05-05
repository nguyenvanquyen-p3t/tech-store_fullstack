import ProductSection from '../components/home/ProductSection'
import { allProducts } from '../data/products'

const Laptop = () => {
  const laptops = allProducts.filter((p) => p.category === 'laptop')

  return (
    <div className="page-content">
      <div className="page-hero">
        <div className="section-container">
          <span className="page-hero-icon">💻</span>
          <h1 className="page-hero-title">Laptop</h1>
          <p className="page-hero-subtitle">
            Laptop chính hãng từ Apple, Dell, ASUS, HP — hiệu năng vượt trội, giá tốt nhất
          </p>
        </div>
      </div>
      <ProductSection
        products={laptops}
        title="Laptop nổi bật"
        subtitle="Những chiếc laptop được yêu thích nhất tại TechStore"
      />
    </div>
  )
}

export default Laptop
