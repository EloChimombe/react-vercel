import React from "react"
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_img from '../../assets/about_img.png'

const About = () =>{
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="Ttheme" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={about_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a recent graduate in Information Systems honours degree,I have gained a deep understanding of information systems,
                             including their design, implementation, and management. My coursework focused on various areas such as database management, 
                             software development, networking, and cybersecurity, which have provided me with a well-rounded skill set. In addition 
                             to my degree, I also pursued a specialized web development course. This course allowed me to acquire hands-on experience
                              in front-end and back-end web development technologies.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr  style={{width: "70%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width: "70%"}} /></div>
                        <div className="about-skill"><p>PHP</p><hr style={{width: "65%"}} /></div>
                        <div className="about-skill"><p>C#, C++ & Java</p><hr style={{width: "55%"}} /></div>
                        <div className="about-skill"><p>SQL</p><hr style={{width: "70%"}} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About