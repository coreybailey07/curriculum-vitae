import React from 'react';

import './hero.style.scss';

import SocialMedia from '../social-media/social-media.component';

const Hero = () => (
  <section id='hero' className='s-hero target-section'>

    <div className='s-hero__bg rellax' data-rellax-speed='-7'></div>

    <div className='row s-hero__content'>
      <div className='column'>
        <div className='s-hero__content-about'>
          <h1>I'm Jonathan Doe.</h1>

          <h3>I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and effective visual identities for companies of all sizes around the globe. Let's <a className='smoothscroll' href='#about'>start scrolling</a> and learn more <a className='smoothscroll' href='#about'>about me</a>.</h3>

          <SocialMedia />

        </div>

      </div>
    </div>

    <div className='s-hero__scroll'>
      <a href='#about' className='s-hero__scroll-link smoothscroll'>
        <span className='scroll-arrow'>
          {/*<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style={{fill:rgba(0, 0, 0, 1);transform:none;-ms-filter:0}}><path d='M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z'></path></svg>*/}
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z'></path></svg>
        </span>
        <span className='scroll-text'>Scroll Down</span>
      </a>
    </div>

  </section>
)

export default Hero;