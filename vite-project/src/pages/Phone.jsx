import { useState, useEffect } from 'react'
import ProductSection from '../components/home/ProductSection'
import { getProducts } from '../services/productService'

const formatPrice = (price) => {
  return price.toLocaleString('vi-VN') + '₫'
}

const Phone = () => {
  const [phones, setPhones] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        const mapped = data
          .filter((p) => p.category === 'phone')
          .map((p) => ({
            id: p.id,
            name: p.name,
            price: formatPrice(p.price),
            oldPrice: formatPrice(Math.round(p.price * 1.15)),
            img: p.imageUrl,
            badge: 'Hot',
            category: p.category,
          }))
        setPhones(mapped)
      } catch (err) {
        console.error('Failed to load phones:', err)
        setError('Không thể tải sản phẩm.')
      } finally {
        setLoading(false)
      }
    }
    fetchPhones()
  }, [])

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
          products={phones}
          title="Điện thoại nổi bật"
          subtitle="Những chiếc điện thoại được yêu thích nhất tại TechStore"
        />
      )}
    </div>
  )
}

export default Phone
