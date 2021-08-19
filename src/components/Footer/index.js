import './footer.css'

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
                    <li className="contact_links"><a>Instagram</a></li>
                    <li className="contact_links"><a>Discord</a></li>
                    <li className="contact_links"><a>Linkedin</a></li>
                    <li className="contact_links"><a>Whatsapp</a></li>
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