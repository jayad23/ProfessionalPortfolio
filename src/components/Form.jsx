import emailjs from 'emailjs-com'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'
import '../Styles/Form.css'

const Form = () => {
    
    const navigate = useNavigate()

    const [ inputValues, setInputValues ] = useState({ name:'', email:'', phone:'', text:''})
    const [ showError, setShowError ] = useState({displayError:''})
    const [ isNameAlright, setIsNameAlright ] = useState(false)
    const [ isMailAlright, setIsMailAlright ] = useState(false)
    const [ isPhoneAlright, setIsPhoneAlright ] = useState(false)
    const [ isTextAlright, setIsTextAlright ] = useState(false)

    const { setShowIcon } = useContext( ProfesionaInfoContext )

    const sendEmail = (e)=>{
        e.preventDefault();
        if (inputValues.name.length !== 0){
            setIsNameAlright(true)
        }else {
            setShowError({...showError, displayError:'Please, Complete this space'})
            setIsNameAlright(false)
        }
        if (inputValues.email.length !== 0){
            setIsMailAlright(true)
        }else {
            setShowError({...showError, displayError:'Please, Complete this space'})
            setIsMailAlright(false)
        }
        if (inputValues.phone.length !== 0){
            setIsPhoneAlright(true)
        }else {
            setShowError({...showError, displayError:'Please, Complete this space'})
            setIsPhoneAlright(false)
        }
        if (inputValues.text.length !== 0){
            setIsTextAlright(true)
        }else {
            setShowError({...showError, displayError:'Please, Complete this space'})
            setIsTextAlright(false)
        }

        if( isNameAlright && isMailAlright && isPhoneAlright && isTextAlright ){
            emailjs.sendForm(
                'service_ebcs33s', 
                'template_16jnaoj', 
                e.target, 
                "user_injv7SkV29ogtnSarH3HB"
            ).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
            e.target.reset()
        }
    }

    const handlerReturn = ()=>{
        navigate('/')
        setShowIcon(false)
    }

    const consultation = `${inputValues.name}, ${inputValues.email}, ${inputValues.text}`
    let WhatsAppLink = `https://api.whatsapp.com/send?phone=573196149019&text=${consultation}`

    return (
        <div className='container-contact'>
            <h1>Let's do something Awesome!</h1>
            <form onSubmit={sendEmail} className="form-wrapper">
                <div className='form-inner-container'>
                    <label>What's your name?</label>
                    <input type="text" name="name" onChange={(e)=> setInputValues({...inputValues, name:e.target.value})}  placeholder={showError.displayError}/>
                    <label>What's your e-mail address?</label>
                    <input type="email" name="email" onChange={(e)=> setInputValues({...inputValues, email:e.target.value})} placeholder={showError.displayError}/>
                    <label>What's your phone number?</label>
                    <input type="text" name="number" onChange={(e)=> setInputValues({...inputValues, phone:e.target.value})} placeholder={showError.displayError}/>
                    <label>What's our next adventure?</label>
                    <textarea cols="30" rows="8" name="message" onChange={(e)=> setInputValues({...inputValues, text:e.target.value})} placeholder={showError.displayError}></textarea>
                </div>
                <section className='buttons-options'>
                    <button className="btn-1" type='submit' value="Send">VIA E-MAIL</button>
                    <button className="btn-2"><a href={WhatsAppLink} target="_blank">VIA WHATSAPP</a></button>
                </section>
            </form>
 
            <button onClick={ handlerReturn }>Return Home</button>
        </div>
    )
}

export default Form
