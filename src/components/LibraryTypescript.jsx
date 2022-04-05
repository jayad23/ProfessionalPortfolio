import React, { useContext } from "react";
import ProfessionalInfoContext from "../Context/ProfesionalInfoContext";
const LibraryTypescript = () => {
  const { Data } = useContext(ProfessionalInfoContext);
  return (
    <div className='section-flip'>
      <div className='section-flip-image-ts'>
        <img src={Data.certifications.logos.ts} alt='ts_logo' />
      </div>
      <div className='section-flip-text'>
        <h1>TypeScript</h1>
        <ul className='skills-list-section'>
          {Data.certifications.typescript?.map((item) => (
            <li className='skills-list' key={item.id}>
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

export default LibraryTypescript;
