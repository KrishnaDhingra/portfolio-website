import React from 'react'
import './GmailButton.css'
import { CgMail } from 'react-icons/cg'
import { motion } from 'framer-motion'
import { FadeIn } from '../AnimationVariants'

const GmailButton = () => {
  return (
    <motion.div
      className="gmailbuttoncontainer"
      variants={FadeIn('up')}
      initial="hidden"
      animate="visible"
    >
      <div className="icon_container">
        <CgMail className="mail_icon" />
      </div>
      <div className="mail_container">
        <span className="mail">dkrishna1608@gmail.com</span>
      </div>
    </motion.div>
  )
}
export default GmailButton
