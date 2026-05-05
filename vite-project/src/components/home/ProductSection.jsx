import ProductCard from './ProductCard'

const ProductSection = ({
  products,
  title = 'Sản phẩm nổi bật',
  subtitle = 'Những sản phẩm được yêu thích và bán chạy nhất',
  onEdit,
  onDelete,
}) => {
  return (
    <section className="products" id="products">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection
