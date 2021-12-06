import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Skills.css'

const Skills = () => {
    return (
        <div className="container-skills">
            <div className='square'>
                <div className="square-row">
                    <div className="row-icon">
                        <i className="fab fa-react"></i>
                    </div>
                    <div className="loader-bar">
                        <span className='loader-effect'>

                        </span>
                        <h6>n%</h6>
                    </div>
                </div>
                <div className="square-row">
                    <div className="row-icon">
                        <i className="fab fa-js"></i>
                    </div>
                    <div className="loader-bar">
                        <span className='loader-effect'>

                        </span>
                        <h6>n%</h6>
                    </div>
                </div>
                <div className="square-row">
                    <div className="row-icon">
                        <i className="fab fa-css3-alt"></i>
                    </div>
                    <div className="loader-bar">
                        <span className='loader-effect'>

                        </span>
                        <h6>n%</h6>
                    </div>
                </div>
                <div className="square-row">
                    <div className="row-icon">
                        <i className="fab fa-html5"></i>
                    </div>
                    <div className="loader-bar">
                        <span className='loader-effect'>

                        </span>
                        <h6>n%</h6>
                    </div>
                </div>
                <div className="square-row">
                    <div className="row-icon">
                        <i className="fas fa-border-style"></i>
                    </div>
                    <div className="loader-bar">
                        <span className='loader-effect'>

                        </span>
                        <h6>n%</h6>
                    </div>
                </div>
                <div className="square-row">
                    <div className="row-icon">
                        <i className="fab fa-sass"></i>
                    </div>
                    <div className="loader-bar">
                        <span className='loader-effect'>

                        </span>
                        <h6>n%</h6>
                    </div>
                </div>
                <div className="square-row">
                    <div className="row-icon">
                        <i className="fab fa-python"></i>
                    </div>
                    <div className="loader-bar">
                        <span className='loader-effect'>

                        </span>
                        <h6>n%</h6>
                    </div>
                </div>
                <div className="square-row">
                    <div className="row-icon">
                        <i class="fab fa-node-js"></i>
                    </div>
                    <div className="loader-bar">
                        <span className='loader-effect'>

                        </span>
                        <h6>n%</h6>
                    </div>
                </div>
                <div className="square-row">
                    <div className="row-icon">
                        <i className="fas fa-server"></i>
                    </div>
                    <div className="loader-bar">
                        <span className='loader-effect'>

                        </span>
                        <h6>n%</h6>
                    </div>
                </div>
            </div>
            <Link to="/about" className="back"><i class="fas fa-arrow-left"></i></Link>
        </div>
    )
}

export default Skills
