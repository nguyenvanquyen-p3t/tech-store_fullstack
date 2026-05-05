const ProductCard = ({ product, onEdit, onDelete }) => {
  const { name, price, oldPrice, img, badge } = product

  return (
    <div className="product-card">
      {badge && <span className="product-badge">{badge}</span>}
      <div className="product-img-wrapper">
        <img src={img} alt={name} className="product-img" />
        <div className="product-actions">
          <button className="action-btn" title="Yêu thích">❤️</button>
          <button className="action-btn" title="Xem nhanh">👁️</button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-rating">
          {'★'.repeat(5)}
          <span className="rating-count">(128)</span>
        </div>
        <div className="product-pricing">
          <span className="product-price">{price}</span>
          <span className="product-old-price">{oldPrice}</span>
        </div>
        <button className="btn-add-cart">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          Thêm vào giỏ
        </button>
        {(onEdit || onDelete) && (
          <div className="product-crud-actions">
            {onEdit && (
              <button
                className="crud-btn crud-btn-edit"
                onClick={() => onEdit(product)}
                title="Sửa sản phẩm"
              >
                Sửa
              </button>
            )}
            {onDelete && (
              <button
                className="crud-btn crud-btn-delete"
                onClick={() => onDelete(product.id)}
                title="Xóa sản phẩm"
              >
                Xóa
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
