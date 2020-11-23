import React, { useState, useEffect } from 'react';
import Contact from './Contact'
import { Link } from 'react-scroll'
import './Navigation.css';

function Navigation() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });
        return() => {
            window.removeEventListener("scroll")
        }
    }, [])

    return(
        <div className = {`bar ${show && "bar_white"}`}>
            <div className = "bar-icon">
                <div>JJS</div>
            </div>
            
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><div className = "bar-content">Home</div>
            </Link>
            
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><div className = "bar-content">About</div>
            </Link>

            <Link
                activeClass="active"
                to="mybook"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><div className = "bar-content">My Book</div>
            </Link>

            <Link
                activeClass="active"
                to="mystory"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><div className = "bar-content">My Story</div>
            </Link>

            <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><div className = "bar-content">Portfolio</div>
            </Link>

            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><div className = "bar-content">Contact</div>
            </Link>

        </div>
    )
}

export default Navigation