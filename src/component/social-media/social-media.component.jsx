import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSocialMediaCompany } from '../../redux/social-media/social-media.selector';

import './social-media.style.scss';

const SocialMedia = ({ company }) => (
  <div className='s-hero__content-social'>
    {company.map((company, j) => (
      company.name ? (<a key={j} aria-hidden='true' onClick={(e) => { e.preventDefault() }} href={company.url} ><i className={company.selector} /></a>) : null
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  company: selectSocialMediaCompany
})

export default connect(mapStateToProps)(SocialMedia);