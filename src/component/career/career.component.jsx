import React from 'react';

import './career.style.scss';

const Career = () => {

  const data = [
    {
      section: "Career",
      position: [{
        company: "Dropbox",
        title: "Product Designer",
        from: "August 2019",
        to: "Present",
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
        company: "Facebook",
        title: "UI/UX Designer",
        from: "August 2016",
        to: "July 2019",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.",

      }]
    }
  ];

  return (
    data.map((car, i) => (
      <div key={i} className='row s-resume__section'>
        <div className='column large-3 tab-12'>
          <h3 className='section-header-allcaps'>{car.section}</h3>
        </div>
        <div className='column large-9 tab-12'>
          {car.position.map((pos, j) => (
            <div key={j + 1} className='resume-block'>

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

export default Career;