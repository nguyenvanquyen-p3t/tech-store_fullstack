import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import CategorySection from '../components/home/CategorySection'
import ProductSection from '../components/home/ProductSection'
import Newsletter from '../components/home/Newsletter'
import { allProducts, categories } from '../data/products'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <CategorySection categories={categories} />
      <ProductSection products={allProducts} />
      <Newsletter />
    </>
  )
}

export default Home
