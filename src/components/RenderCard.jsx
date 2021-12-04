import React from 'react'

const RenderCard = ({ name, stage, description, technologies, deployment, repo, display }) => {
    
    return (
        <div className="card">
            <img src={ display } alt="" />
            <h3>{ name }</h3>
            <h5>{ stage }</h5>
            <h4>{ description }</h4>
            <h5>{ technologies }</h5>
            <div className="container-links">
                <a href={ deployment }>Deploy</a>
                <a href={ repo  }>github repositorie</a>
            </div>
        </div>
    )
}

export default RenderCard
