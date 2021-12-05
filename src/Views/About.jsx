import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/About.css'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'

const About = () => {
    const { Data } = useContext(ProfesionaInfoContext)
    return (
        <div className="container-about">
            <div className="text-about">
                <h2>A B O U T . . .</h2>
                <p>{Data.personal.BIO}<br/><br/>{Data.personal.BIO2}</p>
            </div>
            <div className="history-container">
                <Link to="/academic">Academic Information</Link>
                <Link to="/workhistory">Work History</Link>
                <Link to="/skills">Skills</Link>
                <a href={ Data.images.CV } download="Jaider Vanegas CV  ">Resume</a>
            </div>
            <Link to="/" className="back"><i class="fas fa-arrow-left"></i></Link>
        </div>
    )
}

export default About
