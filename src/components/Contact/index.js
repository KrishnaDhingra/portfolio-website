import './contact.css'
import React, { useState, useEffect } from 'react'
import useForm from './useForm'
import validateInfo from './validateInfo'
import { motion } from 'framer-motion'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const { handleSubmit, errors } = useForm(
    validateInfo,
    name,
    email,
    subject,
    message,
  )

  const animateParent = {
    hidden: {},
    visible: { transition: { delay: 2, staggerChildren: 0.7 } },
  }
  const animateChild = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'easeOut', duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={animateParent}
      initial="hidden"
      animate="visible"
      className="contact"
    >
      <motion.div variants={animateChild} className="contact_heading">
        I'll love to hear your suggestions
      </motion.div>
      <motion.div variants={animateChild} className="input_container">
        <div className="input_form">
          <div className="input_form_text_container">
            <span className="input_form_text">What's your name?</span>
            {errors.name && (
              <span className="input_form_invalid_text">{errors.name}</span>
            )}
          </div>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
          ></input>
        </div>

        <div className="input_form">
          <div className="input_form_text_container">
            <span className="input_form_text">What's your email?</span>
            {errors.email && (
              <span className="input_form_invalid_text">{errors.email}</span>
            )}
          </div>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
          ></input>
        </div>

        <div className="input_form">
          <div className="input_form_text_container">
            <span className="input_form_text">What's the subject?</span>
            {errors.subject && (
              <span className="input_form_invalid_text">{errors.subject}</span>
            )}
          </div>
          <input
            onChange={(e) => {
              setSubject(e.target.value)
            }}
            value={subject}
          ></input>
        </div>

        <div className="input_form">
          <div className="input_form_text_container">
            <span className="input_form_text">What's the message?</span>
            {errors.message && (
              <span className="input_form_invalid_text">{errors.message}</span>
            )}
          </div>
          <input
            onChange={(e) => {
              setMessage(e.target.value)
            }}
          ></input>
        </div>

        <button className="contact_send" onClick={handleSubmit}>
          Send
        </button>
      </motion.div>
    </motion.div>
  )
}

export default Contact
