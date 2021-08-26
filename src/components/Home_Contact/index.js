import './home_contact.css'
import { Link } from 'react-router-dom'

function Home_Contact() {
  return (
    <div className="home_contact">
        <div className="home_contact_text">
            I'll love to make something for you or your company
        </div>
        <Link to="/contact">
          <button className="home_contact_button">Hire Me</button>
        </Link>
    </div>
  );
}

export default Home_Contact;