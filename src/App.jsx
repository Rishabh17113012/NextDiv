import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/Error'
import AboutUs from './components/Quick Links/AboutUs'
import Features from './components/Quick Links/Features'
import FAQ from './components/Quick Links/FAQ'
import PrivacyPolicy from './components/Quick Links/PrivacyPolicy'
import TermsOfService from './components/Quick Links/TermsOfService'
import ScrollToTop from './components/ScrollToTop'
import LoginPage from './pages/Login'


function App() {
  return (
    <>
      <Toaster position="top-right" />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/features' element={<Features/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='/terms-of-service' element={<TermsOfService/>} />
        <Route path='/login' element={<LoginPage/>} />
 
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
