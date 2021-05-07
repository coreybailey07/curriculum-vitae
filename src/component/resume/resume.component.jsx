import React from 'react';

import './resume.style.scss';

import Career from '../career/career.component';
import { Education } from '../education/education.component';
import { Skills } from '../skills/skills.component';

export const Resume = () => (
  <section id='resume' className='s-resume target-section'>
    <Career />
    <Education />
    <Skills />
  </section>
)
