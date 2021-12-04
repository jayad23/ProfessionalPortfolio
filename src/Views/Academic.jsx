import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'
import '../Styles/Academic.css'

const Academic = () => {

    const [ change, setChange ] = useState(false)
    
    setTimeout(() => {
        setChange(!change)
    }, 1000);

    const { Data } = useContext(ProfesionaInfoContext)

    return (
        <div className="container-academic">
            <div className="zoom">
                <img src={ Data.images.GraduationPop } alt="" id="graduation"/>
                <img src={Data.images.Text1T2} id="text-image"/>
                <div className='academic-information'>
                    <ul>
                        <div>
                            <span>
                                <i className="fas fa-file-code"></i>
                            </span>
                            <h4>{ Data.academic.programming.Degree }</h4>
                            <h6>{ Data.academic.programming.institute }</h6>
                            <h6>{ Data.academic.programming.yearOfCompletion }</h6>
                        </div>
                        <div>
                            <span>
                                <i className="fas fa-certificate"></i>
                            </span>
                            <h4>{ Data.academic.diploma.Degree }</h4>
                            <h6>{ Data.academic.diploma.institute }</h6>
                            <h6>{ Data.academic.diploma.yearOfCompletion }</h6>
                        </div>
                        <div>
                            <span>
                                <i className="fas fa-university"></i>
                            </span>
                            <h4>{ Data.academic.bachelor.Degree }</h4>
                            <h6>{ Data.academic.bachelor.institute }</h6>
                            <h6>{ Data.academic.bachelor.yearOfCompletion }</h6>
                        </div>
                        <div>
                            <span>
                                <i className="fas fa-globe"></i>
                            </span>
                            <h4>Teaching Knowledge Test (TKT)</h4>
                            <h6>Cambridge University</h6>
                            <h6>2012</h6>
                        </div>
                    </ul>
                </div>
            </div>
            <Link to="/about" className={ change ? 'back' : 'black'}><i class="fas fa-arrow-left"></i></Link>
        </div>
    )
}

export default Academic
