import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Phone from './pages/Phone'
import Laptop from './pages/Laptop'
import Accessory from './pages/Accessory'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/lienhe" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
