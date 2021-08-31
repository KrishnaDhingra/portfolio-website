import React, {useEffect} from 'react';
import './first_home_component.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'

function First_Home_Component() {

  useEffect(() =>{
    Aos.init({duration: 500, offset: 10});
  }, [])
  
  return (
    <div className="first_home_component" data-aos="fade-up">

      <div className="home_top_container">
        <div className="name">krishna</div>
      </div>

      <div className="home_bottom_container">
        <div className="home_text_container">
          <div className="home_text_left">At vero eos et accusamus et iusto odio dignissimos ducimus qui</div>
          <div className="home_text_right"></div>
        </div>
        <Link to="/work">
          <button className="home_button">My Work</button>
        </Link>
      </div>
    </div>

  )
}

export default First_Home_Component;