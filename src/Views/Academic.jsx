import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'
import '../Styles/Academic.css'

const Academic = () => {

    const [ offSet, setOffSet ] = useState(false)
    const [ change, setChange ] = useState(false)
    
    setTimeout(() => {
        setChange(!change)
    }, 1000);

    const handleScroll = ()=> setOffSet(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)

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
                                <i className="fas fa-university"></i>
                            </span>
                            <h4>FullStack Software Development</h4>
                            <h6>2021</h6>
                            <h6>2021</h6>
                        </div>
                        <div>
                            <span>
                                <i className="fas fa-university"></i>
                            </span>
                            <h4>Diploma in Didactics of English</h4>
                            <h6>2021</h6>
                            <h6>2018</h6>
                        </div>
                        <div>
                            <span>
                                <i className="fas fa-university"></i>
                            </span>
                            <h4>Bachelor in Education in Theology</h4>
                            <h6>2021</h6>
                            <h6>2011</h6>
                        </div>
                        <div>
                            <span>
                                <i className="fas fa-university"></i>
                            </span>
                            <h4>Teaching Knowledge Test (TKT)</h4>
                            <h6>2021</h6>
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
