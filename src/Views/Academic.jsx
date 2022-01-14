import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'

const Academic = () => {

    const [ change, setChange ] = useState(false)
    
    setTimeout(() => {
        setChange(!change)
    }, 1000);

    const { Data } = useContext(ProfesionaInfoContext)

    return (
       
            <div className="container-academic">
                <div className='academic-information'>
                    <ul>
                        <div className='div-info'>
                            <span>
                                <i className="fas fa-laptop-code"></i>
                            </span>
                            <article>
                                <h4>{ Data.academic.programming.alternateOne.Degree }</h4>
                                <h6>{ Data.academic.programming.alternateOne.institute }</h6>
                                <h6>{ Data.academic.programming.alternateOne.yearOfCompletion }</h6>
                            </article>
                        </div>
                        <div className='div-info'>
                            <span>
                                <i className="fas fa-file-alt"></i>
                            </span>
                            <article>
                                <h4>{ Data.academic.programming.alternateTwo.Degree }</h4>
                                <h6>{ Data.academic.programming.alternateTwo.institute }</h6>
                                <h6>{ Data.academic.programming.alternateTwo.yearOfCompletion }</h6>
                            </article>
                        </div>
                        <div className='div-info'>
                            <span>
                                <i className="fab fa-js"></i>
                            </span>
                            <article>
                                <h4>{ Data.academic.programming.alternateThree.Degree }</h4>
                                <h6>{ Data.academic.programming.alternateThree.institute }</h6>
                                <h6>{ Data.academic.programming.alternateThree.yearOfCompletion }</h6>
                            </article>
                        </div>
                        <div className='div-info'>
                            <span>
                                <i className="fas fa-certificate"></i>
                            </span>
                            <article>
                                <h4>{ Data.academic.programming.Degree }</h4>
                                <h6>{ Data.academic.programming.institute }</h6>
                                <h6>{ Data.academic.programming.yearOfCompletion }</h6>
                            </article>
                        </div>
                        <div className='div-info'>
                            <span>
                                <i className="fas fa-university"></i>
                            </span>
                            <article>
                                <h4>{ Data.academic.diploma.Degree }</h4>
                                <h6>{ Data.academic.diploma.institute }</h6>
                                <h6>{ Data.academic.diploma.yearOfCompletion }</h6>
                            </article>
                        </div>
                        <div className='div-info'>
                            <span>
                                <i className="fas fa-globe"></i>
                            </span>
                            <article>
                                <h4>{ Data.academic.bachelor.Degree }</h4>
                                <h6>{ Data.academic.bachelor.institute }</h6>
                                <h6>{ Data.academic.bachelor.yearOfCompletion }</h6>
                            </article>
                        </div>
                    </ul>
                </div>
                <Link to="/about" className={ change ? 'back' : 'black'}><i className="fas fa-arrow-left"></i></Link>
            </div>
            
    )
}

export default Academic
