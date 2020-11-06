import React, { useState, useEffect } from 'react';
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
            <div className = "bar-content">Home</div>
            <div className = "bar-content">About</div>
            <div className = "bar-content">My Book</div>
            <div className = "bar-content">My Story</div>
            <div className = "bar-content">Portfolio</div>
            <div className = "bar-content">Contact</div>
        </div>
    )
}

export default Navigation