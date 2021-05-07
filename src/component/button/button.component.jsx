import React from 'react';

import './button.style.scss';

export const Button = ({ hyperLink, value }) => (
  <a href={hyperLink} className={(hyperLink.includes('mailto') ? 'mailtoui ' : '') + 'btn btn--primary h-full-width'}>{value}</a>
)
