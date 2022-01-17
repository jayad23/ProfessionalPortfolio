import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import Typical from 'react-typical'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'

const Home = () => {
    const navigate = useNavigate()
    const { Data, width } = useContext(ProfesionaInfoContext)
    const [ type, setType ] = useState(true)
    const [ mount, setMount ] = useState(false)
    
    const handleMount = ()=>{
        setMount(!mount)
        setType(!type)
    }

    return (
        <div className="container-home">
            <div className='home-image'>
               <img src={Data.images.avatar} alt="" /> 
            </div>  
            <div className='home-text'>
                {
                    width > 1000 ?
                    mount ?
                    <h3 onMouseLeave={handleMount}
                        onClick={()=> navigate('/about')}
                    >About</h3>
                    :
                    <h3 onMouseEnter={handleMount}>Hello</h3>
                    :
                    <h3 onClick={()=> navigate('/about')}>Start Tour Here</h3>
                }
                <h4>I am Kike Vanegas</h4>
                {
                    type ?
                        <p>
                           {' '}
                            <Typical
                                className="text-iter"
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    `${width > 1000 ? 'Hover' : 'Touch'} over ${width > 1000 ? 'Hello' : 'Start'}`,
                                        2000,
                                    'I am a web developer',
                                        1000,
                                    'I love vivid colours',
                                        1000,
                                    'I am a talented guitar player',
                                        1000,
                                    'My fav. Book is The River',
                                        1000,
                                    'I enjoy country music',
                                        1000,
                                    'I chose the red pill',
                                        1000,
                                    'I am a father',
                                        1000,
                                    'I am in love',
                                        2000
                                ]}
                            />
                       </p>
                    :   <p> 
                            <Typical
                                wrapper='b'
                                steps={[
                                    'Welcome to my Website',
                                    1000
                                ]}
                            />
                        </p>
                }  
            </div>
            <aside className='home-social'>
                <ul>
                    <li><a href={Data.personal.social.facebook} target="_blank" rel="noreferrer" className="fab fa-facebook-f" >{}</a></li>
                    <li><a href={Data.personal.social.twitter} target="_blank" rel="noreferrer" className="fab fa-twitter" >{}</a></li>
                    <li><a href={Data.personal.social.YouTuBe} target="_blank" rel="noreferrer" className="fab fa-youtube" >{}</a></li>
                    <li><a href={Data.personal.social.LinkedIn} target="_blank" rel="noreferrer" className="fab fa-linkedin" >{}</a></li>
                    <li><a href={Data.personal.social.instagram} target="_blank" rel="noreferrer" className="fab fa-instagram">{}</a></li>
                    <li><a href={Data.personal.social.WhatsApp} target="_blank" rel="noreferrer" className="fab fa-whatsapp" >{}</a></li>
                </ul>
            </aside>
        </div>
    )
}

export default Home
