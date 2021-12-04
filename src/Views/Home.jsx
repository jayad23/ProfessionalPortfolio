import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import Typical from 'react-typical'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'

import '../Styles/Home.css'

const Home = () => {
    const navigate = useNavigate()
    const { Data } = useContext(ProfesionaInfoContext)
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
                    mount ?
                    <h3 onMouseLeave={handleMount}
                        onClick={()=> navigate('/about')}
                    >About</h3>
                    :
                    <h3 onMouseEnter={handleMount}>Hello</h3>
                }
                <h4>I am Kike Vanegas</h4>
                {
                    type ?
                        <p>
                            I am {' '}
                            <Typical
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    'a web developer 💻',
                                        1000,
                                    'into vivid colours 🍭',
                                        1000,
                                    'a talented guitar player 🎸',
                                        1000,
                                    'an avid reader 📚',
                                        1000,
                                    'into country music 🤠',
                                        1000,
                                    'after the red pill 💊',
                                        1000,
                                    'a father 👨‍👦',
                                        1000,
                                    'in love ❤️',
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
                    <li><a href={Data.personal.social.facebook} target="_blank" className="fab fa-facebook-f"></a></li>
                    <li><a href={Data.personal.social.twitter} target="_blank" className="fab fa-twitter"></a></li>
                    <li><a href={Data.personal.social.YouTuBe} target="_blank" className="fab fa-youtube"></a></li>
                    <li><a href={Data.personal.social.LinkedIn} target="_blank" className="fab fa-linkedin"></a></li>
                    <li><a href={Data.personal.social.instagram} target="_blank" className="fab fa-instagram"></a></li>
                    <li><a href={Data.personal.social.WhatsApp} target="_blank" class="fab fa-whatsapp"></a></li>
                </ul>
            </aside>
        </div>
    )
}

export default Home
