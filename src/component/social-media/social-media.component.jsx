import React from 'react';

import './social-media.style.scss';

const SocialMedia = () => {

  const socialMediaData = [
    { id: 1, selector: 'fab fa-facebook-square' },
    { id: 2, selector: 'fab fa-twitter' },
    { id: 3, selector: 'fab fa-instagram' },
    { id: 4, selector: 'fab fa-dribbble' },
    { id: 5, selector: 'fab fa-behance' },
    { id: 6, selector: 'fab fa-linkedin' }
  ];

  return (
    <div className='s-hero__content-social'>
      {socialMediaData.map((sm) => (
        <a aria-hidden='true' onClick={(e) => { e.preventDefault() }} href='#/'><i className={sm.selector} /></a>
      ))}
    </div>
  )
}

export default SocialMedia