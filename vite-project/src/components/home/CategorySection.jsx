import CategoryCard from './CategoryCard'

const CategorySection = ({ categories }) => {
  return (
    <section className="categories" id="categories">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Danh mục sản phẩm</h2>
          <p className="section-subtitle">Khám phá các danh mục sản phẩm công nghệ hàng đầu</p>
        </div>
        <div className="categories-grid">
          {categories.map((cat, idx) => (
            <CategoryCard
              key={idx}
              icon={cat.icon}
              name={cat.name}
              count={cat.count}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
