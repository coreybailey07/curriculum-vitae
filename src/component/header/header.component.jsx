import React from 'react';

import './header.style.scss';

import { Nav } from '../nav/nav.component';
import { Hero } from '../hero/hero.component';

export const Header = () => (
  <header>
    <Nav />
    <Hero />
  </header>
)