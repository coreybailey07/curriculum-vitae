import React from 'react';

import './button.style.scss';

export const Button = ({ hyperLink, value }) => (
  <a href={hyperLink} className='btn btn--primary h-full-width'>{value}</a>
)
