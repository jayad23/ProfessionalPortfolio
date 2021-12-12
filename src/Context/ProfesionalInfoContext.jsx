import React, { createContext, useState, useEffect } from "react"
import { Data } from "../DataStore/Data"

const ProfesionaInfoContext = createContext() //esto es el contexto

const ProfesionalProvider = ({children}) => { //esto es el componente proveedor
    
    const [ showIcon, setShowIcon ] = useState(false)

    function useWindowSize (){
        const [ size, setSize ] = useState([window.innerWidth, window.innerHeight])
        useEffect(()=>{
            const handleResize = ()=>{
                setSize ([window.innerWidth, window.innerHeight])
            }
            window.addEventListener('resize', handleResize)
        }, [])
        return size
    }

    const [ width ] = useWindowSize()
    const data = {
        Data,
        width,
        showIcon,
        setShowIcon
    }
   
    return (
    
        <ProfesionaInfoContext.Provider value={data}>{children}</ProfesionaInfoContext.Provider>
       
    )
}

export { ProfesionalProvider }
export default ProfesionaInfoContext



