import React, { useState } from 'react'
import Loader from '../components/Loader'

// Styles
import '../Styles/WorkHistory.css'

const RenderCard = ({ name, stage, description, technologies, deployment, repo, display }) => {
    
    const [ seeMore, setSeeMore ] = useState(false)

    const handleSeeMore = ()=>{
        setSeeMore(!seeMore)
    }

    return (
        <div className="card">
            {
                seeMore ? '' :  display ? <img src={ display } alt="" /> : <Loader/>
            }
            {
                seeMore ? '' : <h3>{ name }</h3>
            }
            {
                seeMore ? '' : <h5>{ stage }</h5>
            }
            {
                seeMore ?
                <p>
                    { description }
                    <i 
                        onClick={handleSeeMore}
                        className="fas fa-undo-alt cursor">    
                    </i>
                </p>
                : <h4 onClick={handleSeeMore} className="cursor">See Info</h4>
            }
            {
                seeMore ? '' : <h5>{ technologies }</h5>
            }
                <div className="container-links">
                    <a href={ deployment }>Deployment</a>
                    <a href={ repo  }>GitHub Repo</a>
                </div> 
        </div>
    )
}

export default RenderCard
