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
import NextDivSignup from './pages/Register'
import Dashboard from './components/Dashboard/dashboard'
import GroupDetails from './components/Dashboard/Groupdetails'
import InvitePage from './pages/InvitePage'
import UserSettings from './pages/Settings'
import AnalyticsPage from './pages/AnalyticsPage'
import FoApp from './components/Modals/ExpenseFormModal'


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
        <Route path='/register' element={<NextDivSignup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/gd' element={<GroupDetails/> }/>
        <Route path='/invite' element={<InvitePage/>}/>
        <Route path='/setting' element={<UserSettings/>}/>
        <Route path='/analytics' element={<AnalyticsPage/>}/>
        <Route path='/foApp' element={<FoApp/>} />
 
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
