import './first_home_component.css'
import { Link } from 'react-router-dom'

function First_Home_Component() {
  return (
    <div className="first_home_component">

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