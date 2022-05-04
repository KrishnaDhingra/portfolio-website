import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FadeinSide,
  ListItem,
  NavbarOpen,
  HamburgerTopLine,
  HamburgerBottomLine,
} from '../AnimationVariants'
import './navbar.css'

function Navbar() {
  const [visible, setVisible] = useState('-120vw')
  const [hamburgerState, setHamburgerState] = useState(true)

  const navbarFunc = () => {
    visible === '-120vw' ? setVisible('0vw') : setVisible('-120vw')
  }

  return (
    <motion.div
      className="navbar_outer"
      variants={FadeinSide()}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar">
        <div className="navbar_first_section">
          <Link
            to="/"
            className="logo_text"
            onClick={() => {
              setVisible('-120vw')
            }}
          >
            k
          </Link>

          <div
            className="hamburger_outer"
            onClick={() => {
              setHamburgerState(!hamburgerState)
              navbarFunc()
            }}
          >
            <motion.div
              className="hamburger_lines"
              id="line1"
              variants={HamburgerTopLine(hamburgerState)}
              initial="hidden"
              animate="visible"
            ></motion.div>
            <motion.div
              className="hamburger_lines"
              variants={HamburgerBottomLine(hamburgerState)}
              id="line2"
              initial="hidden"
              animate="visible"
            ></motion.div>
          </div>
        </div>

        <Link
          to="/contact"
          className="navbar_second_section"
          onClick={() => {
            setVisible('-120vw')
            setHamburgerState(true)
          }}
        >
          <span className="work_with_me">Work With Me</span>
        </Link>
      </div>
      <motion.ul
        className="navbar_dropdown"
        variants={NavbarOpen(visible)}
        initial="hidden"
        animate="visible"
      >
        <div className="links_outer">
          <motion.div variants={ListItem(visible)}>
            <span>01</span>
            <Link
              className="link"
              to="/"
              onClick={() => {
                setVisible('-120vw')
                setHamburgerState(!hamburgerState)
              }}
            >
              <li>
                <a>Home</a>
              </li>
            </Link>
          </motion.div>

          <motion.div variants={ListItem(visible)}>
            <span>02</span>
            <Link
              className="link"
              to="/about"
              onClick={() => {
                setVisible('-120vw')
                setHamburgerState(!hamburgerState)
              }}
            >
              <li>
                <a>About</a>
              </li>
            </Link>
          </motion.div>
        </div>

        <div className="links_outer">
          <motion.div variants={ListItem(visible)}>
            <span>03</span>
            <Link
              className="link"
              to="/work"
              onClick={() => {
                setVisible('-120vw')
                setHamburgerState(!hamburgerState)
              }}
            >
              <li>
                <a>Work</a>
              </li>
            </Link>
          </motion.div>

          <motion.div variants={ListItem(visible)}>
            <span>04</span>
            <Link
              className="link"
              to="/contact"
              onClick={() => {
                setVisible('-120vw')
                setHamburgerState(!hamburgerState)
              }}
            >
              <li>
                <a>Contact</a>
              </li>
            </Link>
          </motion.div>
        </div>
      </motion.ul>
    </motion.div>
  )
}
export default Navbar
