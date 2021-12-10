import React from 'react'; 
import Bounce from 'react-reveal/Bounce';

import '../Styles/SkillsTitle.css'
class Title extends React.Component {
  
  render() {
    return (
      <div className="title">
            <h1>
                <Bounce left cascade>
                    S K I L L S
                </Bounce>
            </h1>
      </div>
    );
  }
}

export default Title;