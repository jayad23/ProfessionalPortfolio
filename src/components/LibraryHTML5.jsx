import React from "react";
const LibraryHTML5 = () => {
  return (
    <div className='section-flip'>
      <div className='section-flip-image-html'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'
          alt='html_logo'
        />
      </div>
      <div className='section-flip-text'>
        <h1>HTML 5</h1>
        <ul className='skills-list-section'>
          <li className='skills-list'>
            <span>Creating Responsive HTML Email</span>
            <span>February 2022</span>
            <span>LinkedIn Learning</span>
          </li>
          <li className='skills-list'>
            <span>Basic HTML Tags and attributes</span>
            <span>September 2017 / June 2021</span>
            <span>YouTube Tutorials</span>
          </li>
          <li className='skills-list'>
            <span>HTML5 Essential training</span>
            <span>November 2021</span>
            <span>LinkedIn</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LibraryHTML5;
