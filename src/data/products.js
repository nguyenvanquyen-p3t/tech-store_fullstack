import phoneImg from '../assets/phone.png'
import laptopImg from '../assets/laptop.png'
import accessoryImg from '../assets/accessory.png'
import xiaomiImg from '../assets/Xiaomi14Ultra.jpg'
import iphoneImg from '../assets/iPhone15ProMax.jpg'
import samsungImg from '../assets/SamsungGalaxyS24Ultra.png'
import oppoImg from '../assets/OPPOFindX7Ultra.webp'
import macbookImg from '../assets/MacBookProM3_14.jpg'
import laptopAsusImg from '../assets/LaptopGamingASUSROG.jpg'
import airpodsImg from '../assets/AirPodsPro2.jpg'
import taiNgheSonyImg from '../assets/TaiNgheSonyWH-1000XM5.webp'
import dellXpsImg from '../assets/Dell_XPS_15.jpg'
import hpSpectreImg from '../assets/HPSpectrex360.jpg'
import banphimImg from '../assets/BanphimcoKeychronK8.jpg'
import chuotImg from '../assets/ChuotLogitechMXMaster3S.jpg'


export const allProducts = [
  { id: 1, name: 'iPhone 15 Pro Max', price: '34.990.000₫', oldPrice: '39.990.000₫', img: iphoneImg, badge: 'Hot', category: 'phone' },
  { id: 2, name: 'Samsung Galaxy S24 Ultra', price: '31.990.000₫', oldPrice: '35.990.000₫', img: samsungImg, badge: 'Mới', category: 'phone' },
  { id: 3, name: 'MacBook Pro M3 14"', price: '49.990.000₫', oldPrice: '54.990.000₫', img: macbookImg, badge: '-9%', category: 'laptop' },
  { id: 4, name: 'Laptop Gaming ASUS ROG', price: '42.990.000₫', oldPrice: '47.990.000₫', img: laptopAsusImg, badge: 'Hot', category: 'laptop' },
  { id: 5, name: 'AirPods Pro 2', price: '5.990.000₫', oldPrice: '6.990.000₫', img: airpodsImg, badge: '-14%', category: 'accessory' },
  { id: 6, name: 'Tai nghe Sony WH-1000XM5', price: '7.490.000₫', oldPrice: '8.490.000₫', img: taiNgheSonyImg, badge: 'Mới', category: 'accessory' },
  { id: 7, name: 'Xiaomi 14 Ultra', price: '23.990.000₫', oldPrice: '27.990.000₫', img: xiaomiImg, badge: '-14%', category: 'phone' },
  { id: 8, name: 'Dell XPS 15', price: '45.990.000₫', oldPrice: '49.990.000₫', img: dellXpsImg, badge: 'Hot', category: 'laptop' },
  { id: 9, name: 'OPPO Find X7 Ultra', price: '22.990.000₫', oldPrice: '25.990.000₫', img: oppoImg, badge: 'Mới', category: 'phone' },
  { id: 10, name: 'HP Spectre x360', price: '38.990.000₫', oldPrice: '42.990.000₫', img: hpSpectreImg, badge: '-9%', category: 'laptop' },
  { id: 11, name: 'Bàn phím cơ Keychron K8', price: '2.490.000₫', oldPrice: '2.990.000₫', img: banphimImg, badge: 'Hot', category: 'accessory' },
  { id: 12, name: 'Chuột Logitech MX Master 3S', price: '2.190.000₫', oldPrice: '2.690.000₫', img: chuotImg, badge: '-18%', category: 'accessory' },
]

export const categories = [
  { icon: '📱', name: 'Điện thoại', count: '120+ sản phẩm' },
  { icon: '💻', name: 'Laptop', count: '85+ sản phẩm' },
  { icon: '🎧', name: 'Phụ kiện', count: '200+ sản phẩm' },
  { icon: '⌚', name: 'Đồng hồ', count: '60+ sản phẩm' },
  { icon: '📺', name: 'Màn hình', count: '45+ sản phẩm' },
  { icon: '🎮', name: 'Gaming', count: '90+ sản phẩm' },
]
