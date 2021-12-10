import React, { useState } from 'react'
import { Flip } from 'react-reveal'
import LibraryReact from './LibraryReact'
const AdditionalText = ({ react, js, css, html5, tailwind, sass, python, node, MySQL }) => {
  
  return (
    <div className="additionalText">
      {
        react ?
        <Flip right>
          <div className='additionalText-Subcontainer'>
              <LibraryReact/>
          </div>
        </Flip>
        : null
      }
    </div>
  )
}

export default AdditionalText
