import './first_home_component.css'

function First_Home_Component() {
  return (
    <div className="first_home_component">

      <div className="home_top_container">
        <div className="name">krishna</div>
      </div>

      <div className="home_bottom_container">
        <div className="home_text_container">
          <div className="home_text_left">A digital studio creating experiences that work, for the people who matter.</div>
          <div className="home_text_right"></div>
        </div>
        <button className="home_button">My Work</button>
      </div>
    </div>

  )
}

export default First_Home_Component;