import React, {useEffect} from 'react';
import './first_home_component.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeIn, FadeInExtreme } from '../AnimationVariants';
import Aos from 'aos'
import Typewriter from "typewriter-effect";

function First_Home_Component() {

  // useEffect(() =>{
  //   Aos.init({duration: 500, offset: 15});
  // }, [])

  const typeWriteOptions = {
    strings: ['Frontend Dev.', 'Blockchain Dev.', 'Student'],
    autoStart: true,
    loop: true,
  }
  return (
    <div className="first_home_component">

      <motion.div 
        className="home_top_container"
        variants={FadeIn("down")}
        initial="hidden"
        animate="visible"
      >
        <div className="name">krishna</div>
      </motion.div>

      <div className="home_bottom_container">
        <div className="home_text_container">
          <motion.div
            className="home_text_left"
            variants={FadeInExtreme()}
            initial="hidden"
            animate="visible"
          >
            Hello 👋<br /> I'm Krishna Dhingra, <br /> 
            <span className="typing_text"><Typewriter
              options={typeWriteOptions}/></span>   
          </motion.div>
          <div className="home_text_right"></div>
        </div>
        <Link to="/work">
          <motion.button 
            className="home_button"
            variants={FadeIn("up")}
            initial="hidden"
            animate="visible"
          >My Work
          </motion.button>
        </Link>
      </div>
    </div>

  )
}

export default First_Home_Component;