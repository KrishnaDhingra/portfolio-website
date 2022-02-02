import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/index.js'
import First_Home_Component from './components/First_Home_Component/index.js'
import Footer from './components/Footer/index.js'
import Home_Contact from './components/Home_Contact/index.js'
import Contact from './components/Contact/index.js'
import Work from './components/Work/index.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'aos/dist/aos.css'
import './index.css'

function App() {

  const [ scrollTop, setScrollTop ] = useState(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100
    setScrollTop(scrolled)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  },  [])

  return (
    <Router>
        <div className="App">

          <Navbar></Navbar>
          <div className="container">

            <Switch>
              <Route path='/' exact component={First_Home_Component}/>
              <Route path='/work' exact component={Work}/>
              <Route path='/contact' exact component={Contact}/>
            </Switch>

            <Home_Contact/>
            <Footer/>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{height: `${scrollTop}%`}}></div>
            </div>
          </div>
        </div>
    </Router>
  );
}

export default App;
