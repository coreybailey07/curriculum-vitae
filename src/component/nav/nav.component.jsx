import React from 'react';

import './nav.style.scss';

const Nav = () => {

  const navLinks = [
    { id: 0, name: "Home", href: "#hero" },
    { id: 1, name: "About", href: "#about" },
    { id: 2, name: "Resume", href: "#resume", },
    { id: 3, name: "Portfolio", href: "#portfolio" },
    { id: 4, name: "Testimonial", href: "#testimonial" },
    { id: 5, name: "Say Hello", href: "#contact" }
  ]

  return (
    <div className='s-header'>
      <div className='row s-header__nav-wrap'>
        <nav className='s-header__nav'>
          <ul>
            {navLinks.map((nl) => (
              // The subsequent line is ideal.. add 'class="current"' if first element in map. However, the second line is just add 'current', but display the same on FE.
              <li key={nl.id} {...(nl.id === 0) && {'className': 'current'}}><a className='smoothscroll' href={nl.href}>{nl.name}</a></li>
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

export default Nav;