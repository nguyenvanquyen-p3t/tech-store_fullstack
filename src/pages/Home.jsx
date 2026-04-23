import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import CategorySection from '../components/home/CategorySection'
import ProductSection from '../components/home/ProductSection'
import Newsletter from '../components/home/Newsletter'

import phoneImg from '../assets/phone.png'
import laptopImg from '../assets/laptop.png'
import accessoryImg from '../assets/accessory.png'

const products = [
  { id: 1, name: 'iPhone 15 Pro Max', price: '34.990.000₫', oldPrice: '39.990.000₫', img: phoneImg, badge: 'Hot' },
  { id: 2, name: 'Samsung Galaxy S24 Ultra', price: '31.990.000₫', oldPrice: '35.990.000₫', img: phoneImg, badge: 'Mới' },
  { id: 3, name: 'MacBook Pro M3 14"', price: '49.990.000₫', oldPrice: '54.990.000₫', img: laptopImg, badge: '-9%' },
  { id: 4, name: 'Laptop Gaming ASUS ROG', price: '42.990.000₫', oldPrice: '47.990.000₫', img: laptopImg, badge: 'Hot' },
  { id: 5, name: 'AirPods Pro 2', price: '5.990.000₫', oldPrice: '6.990.000₫', img: accessoryImg, badge: '-14%' },
  { id: 6, name: 'Tai nghe Sony WH-1000XM5', price: '7.490.000₫', oldPrice: '8.490.000₫', img: accessoryImg, badge: 'Mới' },
  { id: 7, name: 'Xiaomi 14 Ultra', price: '23.990.000₫', oldPrice: '27.990.000₫', img: phoneImg, badge: '-14%' },
  { id: 8, name: 'Dell XPS 15', price: '45.990.000₫', oldPrice: '49.990.000₫', img: laptopImg, badge: 'Hot' },
]

const categories = [
  { icon: '📱', name: 'Điện thoại', count: '120+ sản phẩm' },
  { icon: '💻', name: 'Laptop', count: '85+ sản phẩm' },
  { icon: '🎧', name: 'Phụ kiện', count: '200+ sản phẩm' },
  { icon: '⌚', name: 'Đồng hồ', count: '60+ sản phẩm' },
  { icon: '📺', name: 'Màn hình', count: '45+ sản phẩm' },
  { icon: '🎮', name: 'Gaming', count: '90+ sản phẩm' },
]

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <CategorySection categories={categories} />
      <ProductSection products={products} />
      <Newsletter />
    </>
  )
}

export default Home
