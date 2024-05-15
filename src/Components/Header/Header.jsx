import React from "react"
import './Header.css'
import profile_img from '../../assets/profile_img.png'

const Header = () =>{
    return (
        <div id="home" className="header">
            <img src={profile_img} alt="Profile image" />
            <h1><span>I'am Elnathan Chimombe</span>, web developer</h1>
            <p>I am a full stack web developer based in Johannesburg, South Africa with one year of working experience  at Keo Group</p>
        </div>
    )
}
export default Header