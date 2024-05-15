import React from "react"
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import services_data from '../../assets/services_data'

const Services = () =>{
    return (
        <div id="services" className="services">
            <div className="service-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="theme" />
            </div>
            <div className="service-container">
                {services_data.map((service, index) =>{
                    return <div key={index} className="service-fomart">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <a href="#">Learn more...</a>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Services