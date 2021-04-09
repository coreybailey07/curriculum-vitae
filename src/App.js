import React from 'react';

import './App.css';

import { Nav } from './component/nav/nav.component';
import { Hero } from './component/hero/hero.component';
import { About } from './component/about/about.component';
import { Footer } from './component/footer/footer.component';
import { Contact } from './component/contact/contact.component';
import { Testimonial } from './component/testimonial/testimonial.component';
import { CallToAction } from './component/call-to-action/call-to-action.component';

function App() {
  return (
    <div className='App'>
      <Nav />
      <main>
        <Hero />
        <About />
        <CallToAction />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
