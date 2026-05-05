const CategoryCard = ({ icon, name, count }) => {
  return (
    <a href="#" className="category-card">
      <span className="category-icon">{icon}</span>
      <h3 className="category-name">{name}</h3>
      <p className="category-count">{count}</p>
    </a>
  )
}

export default CategoryCard
