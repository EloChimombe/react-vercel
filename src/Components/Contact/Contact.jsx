import React from "react";
import "./Contact.css";
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e7a85f6b-6110-4841-8fde-b82808010d40");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      }; 

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send a message about anything
                        you want me to work on. You can contact anytime.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>elochimombe@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+27769683281</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Johannesburg, South Africa</p>
                        </div>
                    </div>
                </div>
                <form id="form" onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="10" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
                <span>{result}</span>
            </div>
    </div>
  );
};

export default Contact;
