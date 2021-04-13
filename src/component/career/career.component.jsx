import React from 'react';

import './career.style.scss';

const Career = () => (
  <div className='row s-resume__section'>
  <div className='column large-3 tab-12'>
    <h3 className='section-header-allcaps'>Career</h3>
  </div>
  <div className='column large-9 tab-12'>
    <div className='resume-block'>

      <div className='resume-block__header'>
        <h4 className='h3'>Dropbox</h4>
        <p className='resume-block__header-meta'>
          <span>Product Designer</span>
          <span className='resume-block__header-date'>
            August 2019 - Present
          </span>
        </p>
      </div>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae
        aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam
        nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
      </p>

    </div>

    <div className='resume-block'>

      <div className='resume-block__header'>
        <h4 className='h3'>Facebook</h4>
        <p className='resume-block__header-meta'>
          <span>UI/UX Designer</span>
          <span className='resume-block__header-date'>
            August 2016 - July 2019
          </span>
        </p>
      </div>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
        vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae
        aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam
        nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
      </p>

    </div>
  </div>
</div>
)

export default Career;