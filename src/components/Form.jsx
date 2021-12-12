import emailjs from 'emailjs-com'
import { useNavigate } from 'react-router'
import '../Styles/Form.css'

const Form = () => {
    const navigate = useNavigate()
    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_ebcs33s', 
            'template_16jnaoj', 
            e.target, 
            "user_injv7SkV29ogtnSarH3HB"
        ).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }

    return (
        <div className='container-contact'>
            <h1>Let's do something Awesome!</h1>
            <form onSubmit={sendEmail} className="form-wrapper">
                <div className='form-inner-container'>
                    <label>What's your name?</label>
                    <input type="text" name="name"/>
                    <label>What's your e-mail address?</label>
                    <input type="email" name="email"/>
                    <label>What's your phone number?</label>
                    <input type="text" name="number"/>
                    <label>What's our next adventure?</label>
                    <textarea cols="30" rows="8" name="message"></textarea>
                </div>
                <section className='buttons-options'>
                    <button type='submit' value="Send">VIA E-MAIL</button>
                    <button>VIA WHATSAPP</button>
                </section>
            </form>

            <button onClick={()=> navigate('/')}>Return Home</button>
        </div>
    )
}

export default Form
