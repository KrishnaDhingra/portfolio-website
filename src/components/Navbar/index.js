import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar_outer">

            <div className="navbar">
                <div className="navbar_first_section">

                    <div className="logo_outer">
                        <Link className="link" to="/">
                            <span className="logo_text">k</span>
                        </Link>
                    </div>
                    <div className="hamburger_outer">
                        <div className="hamburger_lines" id="line1"></div>
                        <div className="hamburger_lines" id="line2"></div>
                    </div>


                </div>
                <div className="navbar_second_section">
                    <span className="work_with_me">Work With Me</span>
                </div>


            </div>
            <ul className="navbar_dropdown">
                <div className="links_outer">
                    <div>
                        <span>01</span>
                        <li><a>Home</a></li>
                    </div>
                    <div>
                        <span>02</span>
                        <li><a>About</a></li>
                    </div>
                </div>

                <div className="links_outer">
                    <div>
                        <span>03</span>
                        <li><a>Work</a></li>
                    </div>
                    <div>
                        <span>04</span>
                        <li><a>Contact</a></li>
                    </div>
                </div>
            </ul>
        </div>
    )
}
export default Navbar