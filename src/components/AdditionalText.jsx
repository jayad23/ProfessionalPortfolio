import React, { useState } from 'react'
import { Flip } from 'react-reveal'
import LibraryReact from './LibraryReact'
import LibraryJs from './LibraryJs'
import LibraryOthers from './LibraryOthers'
import LibraryCss from './LibraryCss'
import LibraryHTML5 from './LibraryHTML5'
import LibraryTailwind from './LibraryTailwind'
import LibrarySASS from './LibrarySASS'


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
      {
        js ?
        <Flip right>
          <div className='additionalText-Subcontainer'>
              <LibraryJs/>
          </div>
        </Flip>
        : null
      }
      {
        css ?
        <Flip right>
          <div className='additionalText-Subcontainer'>
              <LibraryCss/>
          </div>
        </Flip>
        : null
      }
      {
        html5 ?
        <Flip right>
          <div className='additionalText-Subcontainer'>
              <LibraryHTML5/>
          </div>
        </Flip>
        : null
      }
      {
        tailwind ?
        <Flip right>
          <div className='additionalText-Subcontainer'>
              <LibraryTailwind/>
          </div>
        </Flip>
        : null
      }
      {
        sass ?
        <Flip right>
          <div className='additionalText-Subcontainer'>
              <LibrarySASS/>
          </div>
        </Flip>
        : null
      }
      {
        node || python || MySQL ?
        <Flip right>
          <div className='additionalText-Subcontainer'>
              <LibraryOthers/>
          </div>
        </Flip>
        : null
      }
    </div>
  )
}

export default AdditionalText
