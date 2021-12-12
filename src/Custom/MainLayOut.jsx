import React from 'react'
import FormIcon from './FormIcon'

const MainLayOut = ({children}) => {
    return (
        <div>
            <FormIcon/>
            {children}
        </div>
    )
}

export default MainLayOut
