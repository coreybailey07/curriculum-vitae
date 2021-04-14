import React from 'react';

import './education.style.scss';

const Education = () => {

  const data = [
    {
      section: "Education",
      school: [{
        institution: "University of Life",
        concentration: "Master in Graphic Design",
        completed: "April 2015",
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
      }, {
        institution: "School of Cool Designers",
        concentration: "B.A. Degree in Graphic Design",
        completed: "August 2012",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio."
      }]
    }
  ];

  return (
    data.map((edu, i) => (
      <div className='row s-resume__section'>
        <div className='column large-3 tab-12'>
          <h3 className='section-header-allcaps'>{edu.section}</h3>
        </div>
        <div className='column large-9 tab-12'>
          {edu.school.map((sch, j) => (
            <div key={j + 1} className='resume-block'>

              <div className='resume-block__header'>
                <h4 className='h3'>{sch.institution}</h4>
                <p className='resume-block__header-meta'>
                  <span>{sch.concentration}</span>
                  <span className='resume-block__header-date'>
                    {sch.completed}
                  </span>
                </p>
              </div>

              <p>{sch.description}</p>

            </div>
          ))}
        </div>
      </div>
    ))
  )
}

export default Education;