import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'

const FormIcon = () => {
    const navigate = useNavigate()
    const { showIcon, setShowIcon } = useContext(ProfesionaInfoContext)

    const handlerShowIcon = ()=>{
        setShowIcon(true)
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
