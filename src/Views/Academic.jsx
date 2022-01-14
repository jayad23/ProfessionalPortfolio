import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'
import { AcademicInfo } from '../components/AcademicInfo'

const Academic = () => {

    const { Data } = useContext(ProfesionaInfoContext)
    
    return (
       
        <div className="container-academic">
            <div className='academic-information'>
                <ul>
                    {
                        Data.academic?.map(item =>
                            <AcademicInfo
                                key = {item.id}
                                id={item.id}
                                degree={item.degree}
                                where={item.institute}
                                isOnline={item.online}
                                isComplete={item.status}
                                finishedIn={item.yearOfCompletion}
                                icon={item.icon}
                            />
                        )
                    }
                </ul>
            </div>
            <Link to="/about" className='back'><i className="fas fa-arrow-left"></i></Link>
        </div>
        // refactored
    )
}

export default Academic
