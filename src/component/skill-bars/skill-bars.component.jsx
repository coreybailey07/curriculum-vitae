import React from 'react';

import './skill-bars.style.scss';

export const SkillBar = () => (
  <ul className='skill-bars-fat'>
    <li>
      <div className='progress percent85'></div>
      <strong>HTML</strong>
    </li>
    <li>
      <div className='progress percent85'></div>
      <strong>CSS</strong>
    </li>
    <li>
      <div className='progress percent65'></div>
      <strong>Javascript</strong>
    </li>
    <li>
      <div className='progress percent90'></div>
      <strong>Figma</strong>
    </li>
    <li>
      <div className='progress percent75'></div>
      <strong>Illustrator</strong>
    </li>
    <li>
      <div className='progress percent60'></div>
      <strong>Photoshop</strong>
    </li>
  </ul>
)