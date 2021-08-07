import React, { useState, useEffect } from 'react'
import { ProjectData } from './ProjectData'
import './projects.scss'

const Projects = (props) => {
    const [index, setIndex] = useState(0)
    const [images, setImages] = useState([])
    let currentProj

    const projectDisplay = () => {
        currentProj = <div className="project" key={index} >
            <div className="projectTextContainer">
                <h2>{ProjectData[index].name}</h2>
                <p>{ProjectData[index].description}</p>
                <a href={ProjectData[index].url} target="_blank">
                    <img src={images[index]}></img>
                </a>
            </div>
        </div>
        return currentProj
    }

    useEffect(() => {
        const images = ProjectData.map((proj) => {
            return proj.img
        })
        setImages(images)
    })

    useEffect(() => {
        projectDisplay()
    }, [index])

    const increment = () => {
        if (index < ProjectData.length - 1) {
            let value = index + 1
            setIndex(value)
        } else {
            setIndex(0)
        }

    }
    const decrement = () => {
        if (index > 0) {
            let value = index - 1
            setIndex(value)
        } else {
            setIndex(ProjectData.length - 1)
        }

    }

    return (
        <div className="projectContainer">
            <div className="projectTitle">
                <h2>PROJECTS</h2>
            </div>
            <div className="projectButtons left" onClick={decrement}><p>&#8592;</p></div>
            <div className="allProjects">
                {projectDisplay()}
            </div>
            <div className="projectButtons right" onClick={increment}><p>&#8594;</p></div>
        </div>
    )
}
export default Projects