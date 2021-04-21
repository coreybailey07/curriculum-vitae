import React from 'react';

import './footer.style.scss';

import SocialMedia from '../social-media/social-media.component'
import { BackToTop } from '../custom-button/custom-button.component';

class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      company: []
    };
  }

  render() {
    return (
      <footer className='s-footer'>
        <div className='row'>
          <div className='column large-4 medium-6 w-1000-stack s-footer__social-block'>

            <SocialMedia show={['Facebook','Twitter','Instagram','Dribbble','Behance']} />

          </div>
          <div className='column large-7 medium-6 w-1000-stack ss-copyright'>
            <span>&copy; Copyright Ceevee 2021</span>
            <span>Design by <a href='https://www.styleshout.com/'>StyleShout</a></span>
          </div>
        </div>

        <BackToTop />

      </footer>
    );
  }
}

export default Footer;