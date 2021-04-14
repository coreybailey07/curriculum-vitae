import React from 'react';

import './resume.style.scss';

import ResumePrototype from './resume-prototype.component';
import Skills from '../skills/skills.component';
import Education from '../education/education.component';
import Career from '../career/career.component';

const Resume = () => (
  <section id='resume' className='s-resume target-section'>

    <ResumePrototype />
    
    <Career />
    <Education />
    <Skills />
  </section>
)

export default Resume;