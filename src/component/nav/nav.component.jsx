import React from 'react';

import './nav.style.scss';

export const Nav = () => {

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume", },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonial" },
    { name: "Say Hello", href: "#contact" }
  ]

  return (
    <div className='s-header'>
      <div className='row s-header__nav-wrap'>
        <nav className='s-header__nav'>
          <ul>
            {navLinks.map((nl, i) => (
              // The subsequent line is ideal.. add 'class="current"' if first element in map. However, the second line is just add 'current', but display the same on FE.
              <li key={i} {...(i === 0) && {'className': 'current'}}><a className='smoothscroll' href={nl.href}>{nl.name}</a></li>
              //<li key={nl.id} className={nl.id === 0 ? 'current' : null}><a className='smoothscroll' href={nl.href}>{nl.name}</a></li>
            ))} 
          </ul>
        </nav>
      </div>

      <a className='s-header__menu-toggle' href='#0' title='Menu'>
        <span className='s-header__menu-icon'></span>
      </a>
    </div>
  )
}
