import React from 'react';

import './resume.style.scss';

import Skills from '../skills/skills.component';
import Education from '../education/education.component';
import Career from '../career/career.component';

const Resume = () => (
  <section id='resume' className='s-resume target-section'>

    <Resume2 />

    <Career />

    <Education />

    <Skills />

  </section>
)

export default Resume;