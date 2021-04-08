import React from 'react';

import './back-to-top.style.scss';

export const BackToTop = () => (
  <div class='ss-go-top'>
    <a class='smoothscroll' title='Back to Top' href='#top'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z' /></svg>
    </a>
  </div>
)