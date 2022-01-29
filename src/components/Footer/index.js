import './footer.css'
import { SiGmail } from "react-icons/si";
import { FaDiscord } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <main className="footer">
            <section>
                <div className="section">
                    <SiGmail className="icons"></SiGmail>
                    <span>Gmail</span>
                </div>
                <div className="section">
                    <FaDiscord className="icons"></FaDiscord>
                    <span>Discord</span>
                </div>
            </section>
            <div className="center">
                <span>Krishna Dhingra</span>
            </div>
            <section>
                <div className="section">
                    <FaLinkedinIn className="icons"></FaLinkedinIn>
                    <span>LinkedIn</span>
                </div>
                <div className="section">
                    <FaWhatsapp className="icons"></FaWhatsapp>
                    <span>Whatsapp</span>
                </div>
            </section>
        </main>
    );
}

export default Footer;