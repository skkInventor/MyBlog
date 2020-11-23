import React from 'react'
import './Contact.css'

function Contact() {
    return(
        <div id = 'contact' className = "contact_box">
            <div className = "contact_header">Contact me</div>
            <div className = "contact_content">
                <a href = "https://www.facebook.com/profile.php?id=100007907565767">
                    <div className = "facebook"></div>
                </a>
                <a href = "https://www.instagram.com/jaeseong9487/">
                    <div className = "instagram"></div>
                </a>
                <a href = "https://www.linkedin.com/in/재성-장-1504481bb/">
                    <div className = "linkedin"></div>
                </a>
            </div>
        </div>
    )
}

export default Contact