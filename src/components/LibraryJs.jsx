import React, { useContext } from "react";
import ProfessionalInfoContext from "../Context/ProfesionalInfoContext";
const LibraryJs = () => {
  const { Data } = useContext(ProfessionalInfoContext);
  return (
    <div className='section-flip'>
      <div className='section-flip-image-js'>
        <img src={Data.certifications.logos.js} alt='logo_js' />
      </div>
      <div className='section-flip-text'>
        <h1>JavaScript</h1>
        <ul className='skills-list-section'>
          {Data.certifications.javascript?.map((item) => (
            <li className='skills-list' hey={item.id}>
              <span>{item.title}</span>
              <span>{item.date}</span>
              <span>{item.institute}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibraryJs;
