import './footer.css'
import { SiGmail } from "react-icons/si";
import { FaDiscord } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer">
            <div className="left_box">
                <div className="top_container">
                    <h2 className="about_us_heading">About us</h2>
                    <div className="underline"></div>
                </div>
                <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam facere asperiores animi! Quam pariatur sint enim sed, doloremque enda quod harum veniam voluptatum unde porro voluptatibus, repellendus laudantium dolore! Asperiores et</div>
            </div>

            <div className="middle_box">
                <div className="top_container">       
                    <h2 className="contact_info_heading">Contact info</h2>
                    <div className="underline"></div>
                </div> 
                <ul className="contact_text">
                    <li className="contact_links"><a><SiGmail className="logos"/>Gmail</a></li>
                    <li className="contact_links"><a><FaDiscord className="logos"/>Discord</a></li>
                    <li className="contact_links"><a><FaLinkedinIn className="logos"/>Linkedin</a></li>
                    <li className="contact_links"><a><FaWhatsapp className="logos" />Whatsapp</a></li>
                </ul>

            </div>

            <div className="right_box">
                <div className="top_container">
                    <h2 className="recent_updates_heading">Recent Updates</h2>
                    <div className="underline"></div>
                </div>
                <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ullam facere asperiores animi! Quam pariatur sint enim sed, doloremque enda quod harum veniam voluptatum unde porro voluptatibus, repellendus laudantium dolore! Asperiores et</div>
            </div>
        </div>
    );
}

export default Footer;