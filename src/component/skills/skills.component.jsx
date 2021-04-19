import React from 'react';

import './skills.style.scss';

import { SkillBars } from '../skill-bars/skill-bars.component';

export const Skills = () => {

  const data = [
    {
      section: "Skills",
      type: [{
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.",
        listItems: [
          {
            item: "Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet."
          },
          {
            item: "Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet."
          },
          {
            item: "Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet."
          }
        ]
      }]
    }
  ];

  return (
    data.map((sk, i) => (
      <div key={i} className='row s-resume__section'>
        <div className='column large-3 tab-12'>
          <h3 className='section-header-allcaps'>{sk.section}</h3>
        </div>
        <div className='column large-9 tab-12'>
          {sk.type.map((typ, j) => (
            <div key={j + 1} className='resume-block'>

              <p>{typ.description}</p>

              <SkillBars/>

            </div>
          ))}
        </div>
      </div>
    ))
  )
}
