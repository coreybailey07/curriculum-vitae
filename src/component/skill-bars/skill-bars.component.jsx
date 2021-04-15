import React from 'react';

import './skill-bars.style.scss';

const SkillBars = () => {

  const data = [
    { name: "HTML", compentancy: 100 },
    { name: "CSS", compentancy: 100 },
    { name: "JavaScript", compentancy: 90 },
    { name: "Bootstrap", compentancy: 80 },
    { name: "jQuery", compentancy: 85 },
    { name: "React", compentancy: 75 },
    { name: "Angular", compentancy: 65 },
    { name: "Photoshop", compentancy: 80 },
    { name: "Figma", compentancy: 50 },
    { name: "MongoDB", compentancy: 45 },
    { name: "SQL", compentancy: 40 }
  ];

  return (
    <ul className='skill-bars-fat'>
      {data.map((skl, i) => (
        <li key={i} className="progress-bar">
          <div style={{ width: skl.compentancy + '%' }}><span className="skill">{skl.name}</span><span className="compentancy"> {skl.compentancy + '%'}</span></div>
        </li>
      ))}
    </ul>
  )
}

export default SkillBars;
