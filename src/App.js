import React from 'react';

import './App.css';

import Header from './component/header/header.component';
import About from './component/about/about.component';
import Resume from './component/resume/resume.component';
import Portfolio from './component/portfolio/portfolio.component';
import Contact from './component/contact/contact.component';
import Testimonial from './component/testimonial/testimonial.component';
import CallToAction from './component/call-to-action/call-to-action.component';
import Footer from './component/footer/footer.component';


function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <About />
        <Resume />
        <Portfolio />
        <CallToAction />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
