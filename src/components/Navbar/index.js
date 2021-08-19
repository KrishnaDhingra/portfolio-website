import React from 'react'
import './navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar_first_section">

                <div className="logo_outer">
                    <span className="logo_text">k</span>
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
    )
}
export default Navbar