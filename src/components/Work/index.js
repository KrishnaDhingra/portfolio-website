import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import { AnimatePresence } from 'framer-motion'
import { buttons_data, project_data } from './work_data.js'
import DetailProject from '../Detail_Project/index.js'
import './work.css'

function Work() {
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 100 })
  }, [])

  const [modalOpen, setModalOpen] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [projects, setProjects] = useState(project_data)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  let show = (e) => {
    if (e.target.innerHTML.toLowerCase() == 'all') {
      setProjects(project_data)
      return
    }
    const newProjects = project_data.filter(
      (element) => element.category == e.target.innerHTML.toLowerCase(),
    )
    setProjects(newProjects)
  }

  return (
    <div className="work" onClick={close}>
      <div className="button_container">
        {buttons_data.map((element) => {
          return (
            <button onClick={(e) => show(e)} className="work_button">
              {element.innerHTML}
            </button>
          )
        })}
      </div>

      <div className="project_container">
        {projects.map((element) => {
          return (
            <div
              className="project"
              data-aos="fade-up"
              onClick={(e) => {
                e.stopPropagation()
                modalOpen ? close() : open()
                setProjectName(element.description)
              }}
            >
              <img className="project_image" src={element.image} />
              <span className="project_description">{element.description}</span>
              <div className="technologies_used_container">
                {element.technologies_used.map((element2) => {
                  return <span className="technologies_used">{element2}</span>
                })}
              </div>
            </div>
          )
        })}
      </div>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <DetailProject
            modalOpen={modalOpen}
            handleClose={close}
            project_name={projectName}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Work
