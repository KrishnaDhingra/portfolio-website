import './detail_project.css';
import { project_detail } from '../Work/work_data.js'
import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion'
import { IoClose } from "react-icons/io5";

function DetailProject({modalOpen, handleClose, project_name}){

    const [ imageView, setImageView ] = useState('desktop')

    let detailedProjectData = ''

    detailedProjectData = project_detail.filter(e => e.name == project_name)
    detailedProjectData = detailedProjectData[0]

    let image = ''
    let website_url = detailedProjectData.website_url
    let code_url = detailedProjectData.code_url
    let desktop_image = detailedProjectData.desktop_image
    let tablet_image = detailedProjectData.tablet_image
    let mobile_image = detailedProjectData.mobile_image

    if(imageView == 'desktop'){image = desktop_image}
    else if(imageView == 'tablet'){image = tablet_image}
    else{image = mobile_image}

    const dropIn = {
        hidden: {
            y: '-100vh'     
        },
        visible: {
            y:'0vh',
            transition:{
                duration: 0.2,
                type: "spring",
                damping: 25,
                stiffness: 400,
            }
        },
        exit: {
            y: '100vh'
        }
    }
    return(

        <motion.div
            className="detail_project_container"
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'

            onClick={(e) => e.stopPropagation()}
        >
            <IoClose className="close-button" onClick={handleClose}/>

            <div className="left_container">
                <img className="hero_image" src={image} alt="" />
                <button className="desktop left_container_buttons" onClick={() => {setImageView('desktop')}}>Desktop</button>
                <button className="tablet left_container_buttons" onClick={() => setImageView('tablet')}>Tablet</button>
                <button className="mobile left_container_buttons" onClick={() => setImageView('mobile')}>Mobile</button>

            </div>
            <div className="right_container">
                <h1 className="heading">Description</h1>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis ullam minima quo impedit totam provident, dolorum sapiente quae suscipit in, reprehenderit tenetur dolorem asperiores numquam hic. A dolores saepe ipsam omnis esse facere quaerat blanditiis! Beatae id molestiae minima hic veritatis alias consectetur eum quaerat facilis ducimus? Distinctio fugiat dolores odit iste quis esse repudiandae doloremque. Aliquid repudiandae atque odit nam, eos sint, mollitia quibusdam magni ex consequuntur vel odio. Officiis quos eius quo recusandae molestiae unde dolorum aliquam nulla porro inventore dolore optio velit, consequuntur, minima voluptatum. Praesentium in accusantium expedita nam maiores ratione sequi voluptas. Iste, ab!</p>
                <a href={website_url} target="_blank" className="preview left_container_buttons">Preview Site</a>
                <a href={code_url} target="_blank" className="code left_container_buttons">View Code</a>
            </div>

        </motion.div>
    )
}
export default DetailProject