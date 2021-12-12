import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import '../Styles/FormIcon.css'

const FormIcon = () => {
    const navigate = useNavigate()
    const [showIcon, setShowIcon] = useState(false)
    const handlerShowIcon = ()=>{
        setShowIcon(!showIcon)
        navigate('/contact')
    }

    return (
        <div className="icon">
            {
                showIcon ?
                <i className="far fa-envelope-open"></i>
                :
                <i onClick={handlerShowIcon} className="far fa-envelope"></i>
            }
        </div>
    )
}

export default FormIcon
