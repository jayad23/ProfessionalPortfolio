import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import PersonalInfoContext from '../Context/ProfesionalInfoContext'
import Title from '../components/Title'
import AdditionalText from '../components/AdditionalText'
// To add
const Skills = () => {

    const { Data, width } = useContext(PersonalInfoContext)

    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)
    const [hover5, setHover5] = useState(false)
    const [hover6, setHover6] = useState(false)
    const [hover7, setHover7] = useState(false)
    const [hover8, setHover8] = useState(false)
    const [hover9, setHover9] = useState(false)
    
    const handlerHover = (param)=>{
        if(param === 1){
            setHover1(!hover1)
        }
        else if(param === 2){
            setHover2(!hover2)
        }
        else if(param === 3){
            setHover3(!hover3)
        }
        else if(param === 4){
            setHover4(!hover4)
        }
        else if(param === 5){
            setHover5(!hover5)
        }
        else if(param === 6){
            setHover6(!hover6)
        }
        else if(param === 7){
            setHover7(!hover7)
        }
        else if(param === 8){
            setHover8(!hover8)
        }
        else if(param === 9){
            setHover9(!hover9)
        }
    }

    


    return (
        <div className="container-skills">
            <Title/>
            <div className='square'>
                    <div className="square-row">
                        <div className="row-icon" onMouseEnter={ width > 700 ? ()=>handlerHover(1) : null} onMouseLeave={ width > 700 ? ()=>handlerHover(1) : null} onClick={ width <= 700 ? ()=>handlerHover(1) : null}>
                            {
                                hover1 ? <h5>{Data.skills.React}%</h5> : <i className="fab fa-react"></i>
                            }
                        </div>
                        <div className="loader-bar">
                            <span className={hover1 ? 'loader-effect animation' : 'loader-effect'} style={{marginRight: "10%"}}>
                                
                            </span>
                        </div>
                        <div className="bar-percent">
                            <h5>100%</h5>
                        </div>
                    </div>
                    <div className="square-row">
                        <div className="row-icon"  onMouseEnter={ width > 700 ? ()=>handlerHover(2) : null} onMouseLeave={ width > 700 ? ()=>handlerHover(2) : null} onClick={ width <= 700 ? ()=>handlerHover(2) : null}>
                            {
                                hover2 ? <h5>{Data.skills.JavaScript}%</h5> : <i className="fab fa-js"></i>
                            }
                        </div>
                        <div className="loader-bar">
                            <span className={hover2 ? 'loader-effect animation' : 'loader-effect'} style={{marginRight: "25%"}}>
                                
                            </span>
                        </div>
                        <div className="bar-percent">
                            <h5>100%</h5>
                        </div>
                    </div>
                    <div className="square-row">
                        <div className="row-icon"  onMouseEnter={ width > 700 ? ()=>handlerHover(3) : null} onMouseLeave={ width > 700 ? ()=>handlerHover(3) : null} onClick={ width <= 700 ? ()=>handlerHover(3): null}>
                            {
                                hover3 ? <h5>{Data.skills.CSS}%</h5> : <i className="fab fa-css3-alt"></i>
                            }
                        </div>
                        <div className="loader-bar">
                            <span className={hover3 ? 'loader-effect animation' : 'loader-effect'} style={{marginRight: "10%"}}>
                                
                            </span>
                        </div>
                        <div className="bar-percent">
                            <h5>100%</h5>
                        </div>
                    </div>
                    <div className="square-row">
                        <div className="row-icon"  onMouseEnter={ width > 700 ? ()=>handlerHover(4) : null} onMouseLeave={ width > 700 ? ()=>handlerHover(4) : null} onClick={ width <= 700 ? ()=>handlerHover(4) : null}>
                            {
                                hover4 ? <h5>{Data.skills.HTML5}%</h5> : <i className="fab fa-html5"></i>
                            }
                        </div>
                        <div className="loader-bar">
                            <span className={hover4 ? 'loader-effect animation' : 'loader-effect'} style={{marginRight: "10%"}}>
                                
                            </span>
                        </div>
                        <div className="bar-percent">
                            <h5>100%</h5>
                        </div>
                    </div>
                    <div className="square-row">
                        <div className="row-icon"  onMouseEnter={ width > 700 ? ()=>handlerHover(5) : null} onMouseLeave={ width > 700 ? ()=>handlerHover(5) : null} onClick={ width <= 700 ? ()=>handlerHover(5) : null}>
                            {
                                hover5 ? <h5>{Data.skills.others.Tailwind}%</h5> : <i className="fas fa-border-style"></i>
                            }
                        </div>
                        <div className="loader-bar">
                            <span className={hover5 ? 'loader-effect animation' : 'loader-effect'} style={{marginRight: "50%"}}>
                                
                            </span>
                        </div>
                        <div className="bar-percent">
                            <h5>100%</h5>
                        </div>
                    </div>
                    <div className="square-row">
                        <div className="row-icon"  onMouseEnter={ width > 700 ? ()=>handlerHover(6) : null} onMouseLeave={ width > 700 ? ()=>handlerHover(6) : null} onClick={ width <= 700 ? ()=>handlerHover(6) : null}>
                            {
                                hover6 ? <h5>{Data.skills.others.SASS}%</h5> : <i className="fab fa-sass"></i>
                            }
                        </div>
                        <div className="loader-bar">
                            <span className={hover6 ? 'loader-effect animation' : 'loader-effect'} style={{marginRight: "50%"}}>
                                
                            </span>
                        </div>
                        <div className="bar-percent">
                            <h5>100%</h5>
                        </div>
                    </div>
                    <div className="square-row">
                        <div className="row-icon"  onMouseEnter={ width > 700 ? ()=>handlerHover(7) : null} onMouseLeave={ width > 700 ? ()=>handlerHover(7) : null} onClick={ width <= 700 ? ()=>handlerHover(7) : null}>
                            {
                                hover7 ? <h5>0{Data.skills.Python}%</h5> : <i className="fab fa-python"></i>
                            }
                        </div>
                        <div className="loader-bar">
                            <span className={hover7 ? 'loader-effect animation' : 'loader-effect'} style={{marginRight: "99%"}}>
                                
                            </span>
                        </div>
                        <div className="bar-percent">
                            <h5>100%</h5>
                        </div>
                    </div>
                    <div className="square-row">
                        <div className="row-icon"  onMouseEnter={ width > 700 ? ()=>handlerHover(8) : null} onMouseLeave={ width > 700 ? ()=>handlerHover(8) : null} onClick={ width <= 700 ? ()=>handlerHover(8) : null}>
                            {
                                hover8 ? <h5>0{Data.skills.NodeJS}%</h5> : <i class="fab fa-node-js"></i>
                            }
                        </div>
                        <div className="loader-bar">
                            <span className={hover8 ? 'loader-effect animation' : 'loader-effect'} style={{marginRight: "99%"}}>
                            
                            </span>
                        </div>
                        <div className="bar-percent">
                            <h5>100%</h5>
                        </div>
                    </div>
                    <div className="square-row">
                        <div className="row-icon"  onMouseEnter={ width > 700 ? ()=>handlerHover(9) : null} onMouseLeave={ width > 700 ? ()=>handlerHover(9) : null} onClick={ width <= 700 ? ()=>handlerHover(9) : null}>
                            {
                                hover9 ? <h5>0{Data.skills.MySQL}%</h5> : <i className="fas fa-server"></i>
                            }
                        </div>
                        <div className="loader-bar">
                            <span className={hover9 ? 'loader-effect animation' : 'loader-effect'} style={{marginRight: "99%"}}>
                            
                            </span>
                        </div>
                        <div className="bar-percent">
                            <h5>100%</h5>
                        </div>
                    </div>
            </div>
            <AdditionalText
                react = {hover1}
                js = {hover2}
                css = {hover3}
                html5 = {hover4}
                tailwind = {hover5}
                sass = {hover6}
                python = {hover7}
                node = {hover8}
                MySQL = {hover9}
            />
            <Link to="/about" className="back"><i className="fas fa-arrow-left"></i></Link>
        </div>
    )
}

export default Skills
