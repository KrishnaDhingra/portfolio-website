import './detail_project.css';
import React, {useState, useEffect} from 'react';

function DetailProject(){
    return(
        <div className="detail_project_container">
            <div className="left_container">
                <img className="hero_image" src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/qjvxdujiq2594nunbhar.jpg" alt="" />
                <button className="desktop left_container_buttons">Desktop</button>
                <button className="tablet left_container_buttons">Tablet</button>
                <button className="mobile left_container_buttons">Mobile</button>

            </div>
            <div className="right_container">
                <h1 className="heading">Description</h1>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic. A dolores saepe ipsam omnis esse facere quaerat blanditiis! Beatae id molestiae minima hic veritatis alias consectetur eum quaerat facilis ducimus? Distinctio fugiat dolores odit iste quis esse repudiandae doloremque. Aliquid repudiandae atque odit nam, eos sint, mollitia quibusdam magni ex consequuntur vel odio. Officiis quos eius quo recusandae molestiae unde dolorum aliquam nulla porro inventore dolore optio velit, consequuntur, minima voluptatum. Praesentium in accusantium expedita nam maiores ratione sequi voluptas. Iste, ab!</p>
                <button className="preview left_container_buttons">Preview Site</button>
                <button className="code left_container_buttons">View Code</button>
            </div>

        </div>
    )
}
export default DetailProject