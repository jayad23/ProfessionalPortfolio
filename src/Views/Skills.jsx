import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Skills.css'

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="container-cards-skills">
                <span className="loader-span">

                </span>
            </div>
            <Link to="/about" className="back"><i class="fas fa-arrow-left"></i></Link>
        </div>
    )
}

export default Skills
