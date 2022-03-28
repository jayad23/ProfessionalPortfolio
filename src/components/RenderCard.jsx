import React, { useState } from "react";
const RenderCard = ({
  name,
  stage,
  description,
  technologies,
  deployment,
  repo,
  display,
}) => {
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div className='card'>
      {seeMore ? "" : <img src={display} alt='card' />}
      {seeMore ? "" : <h3>{name}</h3>}
      {seeMore ? "" : <h5>{stage}</h5>}
      {seeMore ? (
        <p>
          {description}
          <i onClick={handleSeeMore} className='fas fa-undo-alt cursor'></i>
        </p>
      ) : (
        <h4 onClick={handleSeeMore} className='cursor'>
          See Info
        </h4>
      )}
      {seeMore ? "" : <h5>{technologies}</h5>}
      <div className='container-links'>
        <a href={deployment} target='_blank' rel='noreferrer'>
          Deployment
        </a>
        <a href={repo} target='_blank' rel='noreferrer'>
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default RenderCard;
