import { useState, useEffect } from 'react'
import ProductSection from '../components/home/ProductSection'
import { getProducts } from '../services/productService'

const formatPrice = (price) => {
  return price.toLocaleString('vi-VN') + '₫'
}

const Laptop = () => {
  const [laptops, setLaptops] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        const mapped = data
          .filter((p) => p.category === 'laptop')
          .map((p) => ({
            id: p.id,
            name: p.name,
            price: formatPrice(p.price),
            oldPrice: formatPrice(Math.round(p.price * 1.15)),
            img: p.imageUrl,
            badge: 'Hot',
            category: p.category,
          }))
        setLaptops(mapped)
      } catch (err) {
        console.error('Failed to load laptops:', err)
        setError('Không thể tải sản phẩm.')
      } finally {
        setLoading(false)
      }
    }
    fetchLaptops()
  }, [])

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
      {loading ? (
        <section className="products">
          <div className="section-container">
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Đang tải sản phẩm...</p>
            </div>
          </div>
        </section>
      ) : error ? (
        <section className="products">
          <div className="section-container">
            <div className="crud-error"><span>⚠️</span> {error}</div>
          </div>
        </section>
      ) : (
        <ProductSection
          products={laptops}
          title="Laptop nổi bật"
          subtitle="Những chiếc laptop được yêu thích nhất tại TechStore"
        />
      )}
    </div>
  )
}

export default Laptop
