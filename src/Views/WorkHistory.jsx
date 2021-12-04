import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/WorkHistory.css'
import ProfesionalInfoContext from '../Context/ProfesionalInfoContext'

import RenderCard from '../components/RenderCard'

const WorkHistory = () => {
    const { Data } = useContext(ProfesionalInfoContext)
    return (
        <div className="container-history">
            
            {
                Data?.workHistory?.map(value =>
                    <RenderCard
                        key= {value.id}
                        id= {value.id}
                        name= {value.name}
                        stage={value.stage}
                        description={value.description}
                        technologies={value.technologies}
                        deployment={value.url1}
                        repo={value.url2}
                        display={value.image}
                    />
                )
            }
            <Link to="/about" className="back"><i class="fas fa-arrow-left"></i></Link>
        </div>
    )
}

export default WorkHistory
