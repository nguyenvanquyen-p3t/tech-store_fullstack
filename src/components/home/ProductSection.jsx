import ProductCard from './ProductCard'

const ProductSection = ({ products }) => {
  return (
    <section className="products" id="products">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Sản phẩm nổi bật</h2>
          <p className="section-subtitle">Những sản phẩm được yêu thích và bán chạy nhất</p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection
