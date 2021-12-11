import React from 'react'
import { useNavigate } from 'react-router' 

const LibraryHTML5 = () => {
    const navigate = useNavigate()
    return (
        <div className="section-flip">
            <div className="section-flip-image-ht">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="" />
            </div>
            <div className="section-flip-text">
                <h1>HTML 5</h1>
                <p>This is the first technology I got in contact with when starting this journey of computer sciences. In fact, my first attempt to portfolio was made only with HTML5 and CSS3. You can see it on the section of <span onClick={()=> navigate('/workhistory')}>Work history</span></p>
            </div>
        </div>
    )
}

export default LibraryHTML5
