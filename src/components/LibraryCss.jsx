import React, { useContext } from "react";
import ProfessionalInfoContext from "../Context/ProfesionalInfoContext";
const LibraryCss = () => {
  const { Data } = useContext(ProfessionalInfoContext);
  return (
    <div className='section-flip'>
      <div className='section-flip-image-css'>
        <img src={Data.certifications.logos.styles} alt='css_logo' />
      </div>
      <div className='section-flip-text-css'>
        <h1>CSS 3</h1>
        <ul className='skills-list-section'>
          {Data.certifications.styles?.map((item) => (
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

export default LibraryCss;
