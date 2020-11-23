import React from 'react'
import './Portfolio.css'

function Portfolio() {
    return(
        <div id = 'portfolio' className = "portfolio_box">
            <div className = "portfolio_header">Portfolio</div>
            <a href = "https://skkinventor.github.io/netflix-clone/" className = "portfolio1_image"></a>
            <div className = "portfolio1_content">netflix-clone</div>
            <a href = "https://skkinventor.github.io/PacMan/" className = "portfolio2_image"></a>
            <div className = "portfolio2_content">Pacman</div>
        </div>
    )
}

export default Portfolio