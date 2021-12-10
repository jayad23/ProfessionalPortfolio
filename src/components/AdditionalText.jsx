import React from 'react'
import LibraryReact from './LibraryReact'
const AdditionalText = ({ react, js, css, html5, tailwind, sass, python, node, MySQL }) => {

  console.log(react, js, css, html5, tailwind, sass, python, node, MySQL)
  return (
    <div className="additionalText">
      {
        react ?
        <div className='additionalText-Subcontainer'>
            <LibraryReact/>
        </div>
        : null
      }
    </div>
  )
}

export default AdditionalText
