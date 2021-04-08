import React from 'react';

import './nav.style.scss';

export const Nav = () => (
  <nav className='s-header'>
    <div className='row s-header__nav-wrap'>
      <div className='s-header__nav'>
        <ul>
          <li className='current'><a className='smoothscroll' href='#hero'>Home</a></li>
          <li><a className='smoothscroll' href='#about'>About</a></li>
          <li><a className='smoothscroll' href='#resume'>Resume</a></li>
          <li><a className='smoothscroll' href='#portfolio'>Works</a></li>
          <li><a className='smoothscroll' href='#testimonials'>Testimonials</a></li>
          <li><a className='smoothscroll' href='#contact'>Say Hello</a></li>
        </ul>
      </div>
    </div>

    <a className='s-header__menu-toggle' href='#0' title='Menu'>
      <span className='s-header__menu-icon'></span>
    </a>
  </nav>
)
