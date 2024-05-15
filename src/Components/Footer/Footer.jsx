import React from "react";
import './Footer.css'

const Footer = () =>{

      const date = new Date()
      const currentDate = date.getFullYear()

    return (
        <div className="footer">
            <p>© {currentDate} <span>Elo Chimombe</span>, All rights reserved</p>
        </div>
    )
}

export default Footer