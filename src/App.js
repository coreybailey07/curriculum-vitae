import React from 'react';

import './App.css';

import { Nav } from './component/nav/nav.component';
import  {Hero } from './component/hero/hero.component';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Hero/>
    </div>
  );
}

export default App;
