import React from 'react'
import Navigation from './Navigation'
import './ImageContent.css'

function ImageContent() {
    return(
        <div>
            <Navigation />
            <div className = "img-content">장재성의 블로그</div>
            <div className = "img-box">
            </div>
        </div>
    )
}

export default ImageContent