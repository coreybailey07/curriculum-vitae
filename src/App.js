import React from 'react';

import './App.css';

import { Nav } from './component/nav/nav.component';
import { Hero } from './component/hero/hero.component';
import { About } from './component/about/about.component';
import { Footer } from './component/footer/footer.component';

function App() {
  return (
    <div className='App'>
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
