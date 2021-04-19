import React from 'react';

import './skill-bars.style.scss';

export const SkillBars = () => {

  const bars = [
    { skill: "HTML", compentancy: 100 },
    { skill: "CSS", compentancy: 100 },
    { skill: "JavaScript", compentancy: 90 },
    { skill: "Bootstrap", compentancy: 80 },
    { skill: "jQuery", compentancy: 85 },
    { skill: "React", compentancy: 75 },
    { skill: "Angular", compentancy: 65 },
    { skill: "Photoshop", compentancy: 80 },
    { skill: "Figma", compentancy: 50 },
    { skill: "MongoDB", compentancy: 45 },
    { skill: "SQL", compentancy: 40 }
  ];

  return (
    <ul className='skill-bars-fat'>
      {bars.map((bar, i) => (
        <li key={i} className="progress-bar">
          <div style={{ width: bar.compentancy + '%' }}><span className="skill">{bar.skill}</span><span className="compentancy"> {bar.compentancy + '%'}</span></div>
        </li>
      ))}
    </ul>
  )
}
