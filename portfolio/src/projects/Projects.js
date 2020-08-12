import React from 'react'
import './projects.scss'
// import calendr from "../img/calendr.png";
// import treasureHunt from "../img/treasureHunt.png";
// import GoLife from "../img/GoLife.png";

const Projects = (props) => {
    return (

        <div className="projectContainer">
            <div className="projectTitle">
                <h2>PROJECTS</h2>
            </div>
            <div className="allProjects">
                {/* https://calendr.netlify.com/ */}
                <div className="project project1">
                    <div className="projectTextContainer">
                        <h2>
                            Calendr
                                </h2>
                        <p>
                            Calendr is an app that was built for groups to stay up to date
                            on the latest events. The owner of the calendr can share all
                            of the upcoming events with times and description, using
                            templates with set events.
                                </p>
                        <a href="https://calendr.netlify.com/">
                            {/* <img src={calendr}></img> */}
                        </a>
                    </div>
                </div>
                {/* https://treasure-hunt-legend.netlify.com/ */}
                <div className="project project2">
                    <div className="projectTextContainer">
                        <h2>
                            Treasure Hunt
                                </h2>
                        <p>
                            Treasure Hunt is exactly what it sounds like. A game that
                            allows a player to traverse around a map and pick up items.
                            The Player can then sell these items as well as many other
                            things if they are in the right place. Login Token:
                            aad690ee0a6c7fbea1203da3a9b4c72d7aeb3c44
                                </p>
                        <a href="https://treasure-hunt-legend.netlify.com/">
                            {/* <img src={treasureHunt}></img> */}
                        </a>
                    </div>
                </div>
                <div className="project project3">
                    <div className="projectTextContainer">
                        <h2>
                            GoLife - Conway's Game of Life
                                </h2>
                        <p>
                            GoLife is a grid that adds and removes cells
                            based on certain conditions. Create patterns and watch
                            them come to life as the generations progress.
                                </p>
                        <a href="https://golife.netlify.app/">
                            {/* <img src={GoLife}></img> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects