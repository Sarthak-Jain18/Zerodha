import { Routes, Route } from "react-router-dom";
import './App.css'
import ScrollToTop from "./ScrollToTop.jsx";
import Navbar from './landing_page/Navbar.jsx'
import HomePage from './landing_page/home/HomePage.jsx'
import SignupPage from './landing_page/signup/SignupPage.jsx'
import DashboardPage from './landing_page/dashboard/DashboardPage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx'
import ProductsPage from './landing_page/products/ProductsPage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import NotFound from "./landing_page/NotFound.jsx"
import Footer from './landing_page/Footer.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

