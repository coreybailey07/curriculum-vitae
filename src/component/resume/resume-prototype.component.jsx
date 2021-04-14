import React from 'react';

import './resume.style.scss';

const ResumePrototype = () => {

  const resume = [
    {
      section: "Career",
      position: [{
        company: "Dropbox",
        title: "Lead Engineer",
        from: "January 1999",
        to: "September 2021",
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
        company: "Super Electronics",
        title: "Production Designer",
        from: "January 2009",
        to: "September 2014",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.",

      }]
    },
    {
      section: "Jobs",
      position: [{
        company: "Google",
        title: "Production Lead Engineer",
        from: "January 2002",
        to: "September 2015",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.",
      }]
    },
  ];

  return (
    resume.map((res, i) => (
    <div className='row s-resume__section'>
          <div className='column large-3 tab-12'>
            <h3 className='section-header-allcaps'>{res.section}</h3>
          </div>
          <div className='column large-9 tab-12'>
            {res.position.map((pos, j) => (
              <div key={j+1} className='resume-block'>

                <div className='resume-block__header'>
                  <h4 className='h3'>{pos.company}</h4>
                  <p className='resume-block__header-meta'>
                    <span>{pos.title}</span>
                    <span className='resume-block__header-date'>
                      {pos.from} - {pos.to}
                    </span>
                  </p>
                </div>

                <p>{pos.description}</p>

              </div>
            ))}
          </div>
    </div>
    ))
  )
}

export default ResumePrototype;