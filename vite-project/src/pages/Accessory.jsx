import { useState, useEffect } from 'react'
import ProductSection from '../components/home/ProductSection'
import { getProducts } from '../services/productService'

const formatPrice = (price) => {
  return price.toLocaleString('vi-VN') + '₫'
}

const Accessory = () => {
  const [accessories, setAccessories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        const mapped = data
          .filter((p) => p.category === 'accessory')
          .map((p) => ({
            id: p.id,
            name: p.name,
            price: formatPrice(p.price),
            oldPrice: formatPrice(Math.round(p.price * 1.15)),
            img: p.imageUrl,
            badge: 'Hot',
            category: p.category,
          }))
        setAccessories(mapped)
      } catch (err) {
        console.error('Failed to load accessories:', err)
        setError('Không thể tải sản phẩm.')
      } finally {
        setLoading(false)
      }
    }
    fetchAccessories()
  }, [])

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
          products={accessories}
          title="Phụ kiện nổi bật"
          subtitle="Phụ kiện chất lượng cao với giá ưu đãi"
        />
      )}
    </div>
  )
}

export default Accessory
