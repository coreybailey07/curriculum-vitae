import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './social-media.style.scss';
import { selectSocialMediaCompany } from '../../redux/social-media/social-media.selector';

export const SocialMedia = (props) => {
  const data = [
    { id:0, name:'Facebook', url:'https://www.facebook.com/', selector:'fab fa-facebook-square' },
    { id:1, name:'Twitter', url:'https://twitter.com/?lang=en', selector:'fab fa-twitter' },
    { id:2, name:'Instagram', url:'https://www.instagram.com/', selector:'fab fa-instagram' },
    { id:3, name:'Dribbble', url:'https://dribbble.com/', selector:'fab fa-dribbble' },
    { id:4, name:'Behance', url:'https://www.behance.net/', selector:'fab fa-behance' },
    { id:5, name:'LinkedIn', url:'https://www.linkedin.com/', selector:'fab fa-linkedin' }
  ];

  return (
    <div className='s-hero__content-social'>
      {data.map((sm) => (
        <a key={sm.id} aria-hidden='true' onClick={(e) => { e.preventDefault() }} href='#/'><i className={sm.selector} /></a>
      ))}
    </div>
  )

}
const mapStateToProps = createStructuredSelector({
  company: selectSocialMediaCompany
})

export default connect(mapStateToProps)(SocialMedia);