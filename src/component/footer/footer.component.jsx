import React from 'react';

import './footer.style.scss';

import SocialMedia from '../social-media/social-media.component'
import { BackToTop } from '../custom-button/custom-button.component';

export const Footer = () => (
  <footer class='s-footer'>
    <div class='row'>
      <div class='column large-4 medium-6 w-1000-stack s-footer__social-block'>
        <SocialMedia/>
      </div>

      <div class='column large-7 medium-6 w-1000-stack ss-copyright'>
        <span>&copy; Copyright Ceevee 2021</span>
        <span>Design by <a href='https://www.styleshout.com/'>StyleShout</a></span>
      </div>
    </div>

    <BackToTop />
    
  </footer>
)