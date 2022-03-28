import React from "react";
const LibraryTypescript = () => {
  return (
    <div className='section-flip'>
      <div className='section-flip-image-ts'>
        <img
          src='https://iconape.com/wp-content/png_logo_vector/typescript.png'
          alt='ts_logo'
        />
      </div>
      <div className='section-flip-text'>
        <h1>TypeScript</h1>
        <ul className='skills-list-section'>
          <li className='skills-list'>
            <span>TS: Object Oriented Programming</span>
            <span>January 2022</span>
            <span>LinkedIn</span>
          </li>
          <li className='skills-list'>
            <span>TypeScript & React</span>
            <span>December 2021</span>
            <span>LinkedIn</span>
          </li>
          <li className='skills-list'>
            <span>TypeScript: The Complete Professional Guide.</span>
            <span>November 2021</span>
            <span>Udemy</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LibraryTypescript;
