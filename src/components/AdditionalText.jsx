import React from 'react'
import { Flip } from 'react-reveal'
import LibraryReact from './LibraryReact'
import LibraryJs from './LibraryJs'
import LibraryOthers from './LibraryOthers'
import LibraryCss from './LibraryCss'
import LibraryHTML5 from './LibraryHTML5'
import LibraryTypescript from './LibraryTypescript'


const AdditionalText = ({ react, js, css, html5, typescript, python, node, MySQL }) => {
  
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
        typescript ?
        <Flip right>
          <div className='additionalText-Subcontainer'>
              <LibraryTypescript/>
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
