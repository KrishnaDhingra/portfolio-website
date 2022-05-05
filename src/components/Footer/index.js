import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './footer.css'
import { SiGmail } from 'react-icons/si'
import { FaDiscord } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

function Footer() {
  const [focused, setFocused] = useState(null)
  const [focused2, setFocused2] = useState(null)
  let Tags = [
    { tag: SiGmail, text: 'Gmail' },
    { tag: FaDiscord, text: 'Discord' },
  ]
  let Tags2 = [
    { tag: FaLinkedinIn, text: 'LinkedIn' },
    { tag: FaWhatsapp, text: 'Whatsapp' },
  ]
  return (
    <main className="footer">
      <section>
        {Tags.map((Tag) => {
          return (
            <div
              onMouseLeave={() => setFocused(null)}
              onFocus={() => setFocused(Tag.text)}
              onMouseEnter={() => setFocused(Tag.text)}
              className="section"
            >
              <Tag.tag className="icons"></Tag.tag>
              <span>{Tag.text}</span>
              {focused === Tag.text ? <BackgroundFocused /> : null}
            </div>
          )
        })}
      </section>
      <div className="center">
        <span>Krishna Dhingra</span>
      </div>
      <section>
        {Tags2.map((Tag) => {
          return (
            <div
              onMouseLeave={() => setFocused(null)}
              onFocus={() => setFocused(Tag.text)}
              onMouseEnter={() => setFocused(Tag.text)}
              className="section"
            >
              <Tag.tag className="icons"></Tag.tag>
              <span>{Tag.text}</span>
              {focused === Tag.text ? <BackgroundFocused /> : null}
            </div>
          )
        })}
      </section>
    </main>
  )
}

function BackgroundFocused() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.1,
          layout: {
            duration: 0.2,
            ease: 'easeOut',
          },
        },
      }}
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        background: 'rgba(0, 0, 0, 0.2)',
      }}
      layoutId="highlight"
    />
  )
}

export default Footer
