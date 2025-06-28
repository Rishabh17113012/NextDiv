import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className='container max-w-full bg-amber-200'>
        <Navbar/>
        <div>
            < Hero/>
            <Footer/>
        </div>
    </div>
  )
}

export default HomePage
