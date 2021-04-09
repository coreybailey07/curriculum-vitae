import React from 'react';

import './skills.style.scss';

import { SkillBars } from '../skill-bars/skill-bars.component';

export const Skill = () => (
  <div className='row s-resume__section'>
    <div className='column large-3 tab-12'>
      <h3 className='section-header-allcaps'>Skills</h3>
    </div>
    <div className='column large-9 tab-12'>
      <div className='resume-block'>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae
          aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam
          nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
        </p>

        <SkillBars />

      </div>

    </div>
  </div>
)