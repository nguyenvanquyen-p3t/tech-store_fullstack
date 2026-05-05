import { useState, useEffect } from 'react'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import CategorySection from '../components/home/CategorySection'
import ProductSection from '../components/home/ProductSection'
import Newsletter from '../components/home/Newsletter'
import { categories } from '../data/products'
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/productService'

// Helper to format price from number to Vietnamese currency string
const formatPrice = (price) => {
  return price.toLocaleString('vi-VN') + '₫'
}

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // CRUD form states
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'phone',
    imageUrl: '',
  })

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getProducts()
      // Map API data to match the existing ProductCard prop format
      const mapped = data.map((p) => ({
        id: p.id,
        name: p.name,
        price: formatPrice(p.price),
        oldPrice: formatPrice(Math.round(p.price * 1.15)),
        img: p.imageUrl,
        badge: 'Hot',
        category: p.category,
      }))
      setProducts(mapped)
    } catch (err) {
      console.error('Failed to load products:', err)
      setError('Không thể tải sản phẩm. Vui lòng kiểm tra kết nối backend.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setFormData({ name: '', price: '', category: 'phone', imageUrl: '' })
    setEditingProduct(null)
    setShowForm(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const productData = {
        name: formData.name,
        price: parseFloat(formData.price),
        category: formData.category,
        imageUrl: formData.imageUrl,
      }

      if (editingProduct) {
        productData.id = editingProduct.id
        await updateProduct(editingProduct.id, productData)
      } else {
        await createProduct(productData)
      }

      resetForm()
      await fetchProducts()
    } catch (err) {
      console.error('Error saving product:', err)
      setError('Lỗi khi lưu sản phẩm. Vui lòng thử lại.')
    }
  }

  const handleEdit = (product) => {
    // Parse price string back to number
    const priceNum = parseInt(product.price.replace(/[^\d]/g, ''), 10)
    setFormData({
      name: product.name,
      price: priceNum.toString(),
      category: product.category,
      imageUrl: product.img,
    })
    setEditingProduct(product)
    setShowForm(true)
    // Scroll to form
    document.getElementById('crud-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDelete = async (productId) => {
    if (!window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) return
    try {
      await deleteProduct(productId)
      await fetchProducts()
    } catch (err) {
      console.error('Error deleting product:', err)
      setError('Lỗi khi xóa sản phẩm. Vui lòng thử lại.')
    }
  }

  return (
    <>
      <Hero />
      <Features />
      <CategorySection categories={categories} />

      {/* CRUD Management Section */}
      <section className="crud-section" id="crud-section">
        <div className="section-container">
          <div className="crud-header">
            <h2 className="section-title">Quản lý sản phẩm</h2>
            <button
              className="btn btn-primary crud-add-btn"
              onClick={() => {
                resetForm()
                setShowForm(!showForm)
              }}
            >
              {showForm ? '✕ Đóng' : '＋ Thêm sản phẩm'}
            </button>
          </div>

          {showForm && (
            <form className="crud-form" onSubmit={handleSubmit}>
              <h3 className="crud-form-title">
                {editingProduct ? '✏️ Sửa sản phẩm' : '➕ Thêm sản phẩm mới'}
              </h3>
              <div className="crud-form-grid">
                <div className="crud-form-group">
                  <label htmlFor="name">Tên sản phẩm</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="VD: iPhone 16 Pro Max"
                    required
                  />
                </div>
                <div className="crud-form-group">
                  <label htmlFor="price">Giá (VNĐ)</label>
                  <input
                    id="price"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="VD: 34990000"
                    required
                  />
                </div>
                <div className="crud-form-group">
                  <label htmlFor="category">Danh mục</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="phone">Điện thoại</option>
                    <option value="laptop">Laptop</option>
                    <option value="accessory">Phụ kiện</option>
                  </select>
                </div>
                <div className="crud-form-group">
                  <label htmlFor="imageUrl">URL hình ảnh</label>
                  <input
                    id="imageUrl"
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.png"
                  />
                </div>
              </div>
              <div className="crud-form-actions">
                <button type="submit" className="btn btn-primary">
                  {editingProduct ? '💾 Cập nhật' : '➕ Thêm'}
                </button>
                <button type="button" className="btn btn-outline" onClick={resetForm}>
                  Hủy
                </button>
              </div>
            </form>
          )}

          {error && (
            <div className="crud-error">
              <span>⚠️</span> {error}
            </div>
          )}
        </div>
      </section>

      {/* Product display section */}
      {loading ? (
        <section className="products" id="products">
          <div className="section-container">
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Đang tải sản phẩm...</p>
            </div>
          </div>
        </section>
      ) : (
        <ProductSection
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <Newsletter />
    </>
  )
}

export default Home
