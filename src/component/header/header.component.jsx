import React from 'react';

import './header.style.scss';

import Nav from '../nav/nav.component';
import Hero from '../hero/hero.component';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      company: [
        { name: 'Twitter' },
        { name: 'Facebook' },
        { name: 'Dribble' }
      ]
    };
  }

  render() {
    return (
      <header>
        <Nav />
        <Hero />
      </header>
    );
  }
}

export default Header;