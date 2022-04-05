import React, { useContext } from "react";
import ProfessionalInfoContext from "../Context/ProfesionalInfoContext";
const LibraryHTML5 = () => {
  const { Data } = useContext(ProfessionalInfoContext);
  return (
    <div className='section-flip'>
      <div className='section-flip-image-html'>
        <img src={Data.certifications.logos.html} alt='html_logo' />
      </div>
      <div className='section-flip-text'>
        <h1>HTML 5</h1>
        <ul className='skills-list-section'>
          {Data.certifications.html?.map((item) => (
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

export default LibraryHTML5;
