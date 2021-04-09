import React from 'react';

import './social-media.style.scss';

const SocialMedia = () => (
  <div className='s-hero__content-social'>
    <a aria-hidden='true' onClick={(e) => {e.preventDefault()}} href='#/'><i className='fab fa-facebook-square' /></a>
    <a aria-hidden='true' onClick={(e) => {e.preventDefault()}} href='#/'><i className='fab fa-twitter' /></a>
    <a aria-hidden='true' onClick={(e) => {e.preventDefault()}} href='#/'><i className='fab fa-instagram' /></a>
    <a aria-hidden='true' onClick={(e) => {e.preventDefault()}} href='#/'><i className='fab fa-dribbble' /></a>
    <a aria-hidden='true' onClick={(e) => {e.preventDefault()}} href='#/'><i className='fab fa-behance' /></a>
    <a aria-hidden='true' onClick={(e) => {e.preventDefault()}} href='#/'><i className='fab fa-linkedin' /></a>
  </div>
)

export default SocialMedia;