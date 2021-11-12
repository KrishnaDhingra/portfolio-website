import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import './navbar.css'

function Navbar() {

    const [ visible, setVisible ] = useState("-120vw")

    const navbarFunc = () => {
        visible === "-120vw" ? setVisible("0vw") : setVisible("-120vw")
        console.log(visible)
    }
    
    const variant = {
        hidden: {
            x: "-120vw",
            opacity: 0
        },
        visible: {
            x: visible,
            opacity: 1,
            transition: {
                type: "none",
                duration: 0.3,
                staggerChildren: 0.09
            }
        }
    }
    const listItem = {
        hidden: {
            x: '-120vw'
        },
        visible: {
            x: visible,
            transition: {
                type: "spring",
                stiffness: 700,
                damping: 40   
            }
        }
    }
    return (
        <motion.div className="navbar_outer">

            <div className="navbar">
                <div className="navbar_first_section">

                    <div className="logo_outer">
                        <Link to="/">
                            <span className="logo_text">k</span>
                        </Link>
                    </div>
                    <div className="hamburger_outer" onClick={navbarFunc}>
                        <div className="hamburger_lines" id="line1"></div>
                        <div className="hamburger_lines" id="line2"></div>
                    </div>


                </div>
                <div className="navbar_second_section">
                    <span className="work_with_me">Work With Me</span>
                </div>


            </div>
            <motion.ul 
                className="navbar_dropdown"
                variants={variant}
                initial="hidden"
                animate="visible"
            >
                <div className="links_outer">
                    <motion.div variants={listItem}>
                        <span>01</span>
                        <Link className="link" to="/" onClick={() => setVisible("-120vw")}>
                            <li><a>Home</a></li>
                        </Link>
                    </motion.div>

                    <motion.div variants={listItem}>
                        <span>02</span>
                        <Link className="link" to="/about" onClick={() => setVisible("-120vw")}>
                            <li><a>About</a></li>
                        </Link>
                    </motion.div>
                </div>

                <div className="links_outer">
                    <motion.div variants={listItem}>
                        <span>03</span>
                        <Link className="link" to="/work" onClick={() => setVisible("-120vw")}>
                            <li><a>Work</a></li>
                        </Link>
                    </motion.div>

                    <motion.div variants={listItem}>
                        <span>04</span>
                        <Link className="link" to="/contact" onClick={() => setVisible("-120vw")}>
                            <li><a>Contact</a></li>
                        </Link>
                    </motion.div>
                </div>
            </motion.ul>
        </motion.div>
    )
}
export default Navbar