import React from 'react';

import './App.css';

import { Nav } from './component/nav/nav.component';
import { Hero } from './component/hero/hero.component';
import { Footer } from './component/footer/footer.component';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
