import React, { useContext } from "react";
import ProfessionalinfoContext from "../Context/ProfesionalInfoContext";
const LibraryReact = () => {
  const { Data } = useContext(ProfessionalinfoContext);
  return (
    <div className='section-flip'>
      <div className='section-flip-image'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
          alt='react_logo'
        />
      </div>
      <div className='section-flip-text'>
        <h1>React JS</h1>
        <ul className='skills-list-section'>
          {Data.certifications.react.map((title) => (
            <li className='skills-list' key={title.id}>
              <span>{title.title}</span>
              <span>{title.date}</span>
              <span>{title.institute}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibraryReact;
