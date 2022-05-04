import React from 'react'
import GmailButton from '../GmailButton/GmailButton'
import './first_home_component.css'
import { motion } from 'framer-motion'
import { FadeIn, FadeInExtreme } from '../AnimationVariants'
import Typewriter from 'typewriter-effect'

function First_Home_Component() {
  const typeWriteOptions = {
    strings: ['Frontend Dev.', 'Blockchain Dev.', 'Freelancer', 'Student'],
    autoStart: true,
    loop: true,
  }
  return (
    <div className="first_home_component">
      <motion.div
        className="home_top_container"
        variants={FadeIn('down')}
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
            Hello 👋
            <br /> I'm Krishna Dhingra, <br />
            <span className="typing_text">
              <Typewriter options={typeWriteOptions} />
            </span>
          </motion.div>
          <div className="home_text_right"></div>
        </div>
        <GmailButton />
      </div>
    </div>
  )
}

export default First_Home_Component
