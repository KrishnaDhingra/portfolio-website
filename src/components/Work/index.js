import React, {useState, useEffect} from 'react'
import Aos from 'aos'
import { motion, AnimatePresence } from 'framer-motion'
import { buttons_data, project_data, project_detail } from './work_data.js'
import DetailProject from '../Detail_Project/index.js'
import './work.css'

function Work() {

    useEffect(() =>{
        Aos.init({duration: 1000, offset: 100});
      }, [])
      

    const [value, setValue] = useState(0)
    const [ modalOpen, setModalOpen ] = useState(false)
    const [ projectName, setProjectName ] = useState('')

    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)
    
    let show = (e) =>{

        project_data.map(element =>{

            if(e.target.innerHTML.toLowerCase() === 'all'){
                element.show = true
                setValue(value + 1)
            }else{
                if(element.category === e.target.innerHTML.toLowerCase()){

                    element.show = true
                    setValue(value + 1)

                }else{
                    element.show = false
                }
            }

        })

        
    }


  return (
    <div className="work">
        <div className="button_container">

            {buttons_data.map(element =>{
                return(
                    <button onClick={(e) => show(e)}className="work_button">{element.innerHTML}</button>
                )
            })}
        </div>
        
        <div className="project_container">
            {project_data.map(element =>{

                if(element.show === true){

                    return(
    
                        <div 
                            className="project" data-aos="fade-up"
                            onClick={
                                (e) =>{
                                    e.stopPropagation()
                                    modalOpen ? close() : open()
                                    setProjectName(element.description)
                            }}
                        >
                            <img className="project_image" src={element.image}/>
                            <span className="project_description">{element.description}</span>
                            <div className="technologies_used_container">
                                {element.technologies_used.map(element2 =>{
                                    return(
                                        <span className="technologies_used">{element2}</span>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }


            })}
        </div>

        <AnimatePresence

            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}

        >

            { modalOpen && <DetailProject
                modalOpen={modalOpen}
                handleClose={close} 
                project_name={projectName}
                // description={detailedProjectData ? detailedProjectData.description : ''}
                // website_url={detailedProjectData ? detailedProjectData.website_url : ''}
                // code_url={detailedProjectData ? detailedProjectData.code_url : ''}
                // desktop_image={detailedProjectData ? detailedProjectData.desktop_image : ''}
                // tablet_image={detailedProjectData ? detailedProjectData.tablet_image : ''}
                // mobile_image={detailedProjectData ? detailedProjectData.mobile_image : ''}
                />
             }

        </AnimatePresence>

    </div>
  );
}

export default Work;
