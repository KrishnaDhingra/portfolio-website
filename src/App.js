import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/index.js'
import First_Home_Component from './components/First_Home_Component/index.js'
import Footer from './components/Footer/index.js'
import Home_Contact from './components/Home_Contact/index.js'
import Contact from './components/Contact/index.js'
import Work from './components/Work/index.js'
import ProgressBar from './components/ProgressBar/progressBar.js'
import LoadingAnimation from './components/LoadingAnimation/loadingAnimation.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'aos/dist/aos.css'
import './App.css'

function App() {
  const [scrollTop, setScrollTop] = useState(0)
  const [loading, setLoading] = useState(true)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100
    setScrollTop(scrolled)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2600)

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <BrowserRouter className="container">
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<First_Home_Component />} />
              <Route path="/work" exact element={<Work />} />
              <Route path="/contact" exact element={<Contact />} />
            </Routes>

            <Home_Contact />
            <Footer />
            <ProgressBar height={scrollTop} />
          </div>
        </div>
      )}
    </BrowserRouter>
  )
}

export default App
