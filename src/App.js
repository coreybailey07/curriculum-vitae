import React from 'react';

import './App.scss';

import Header from './component/header/header.component';
import { About } from './component/about/about.component';
import { Resume } from './component/resume/resume.component';
import Portfolio from './component/portfolio/portfolio.component';
import { Contact } from './component/contact/contact.component';
import { Testimonials } from './component/testimonials/testimonials.component';
import { CallToAction } from './component/call-to-action/call-to-action.component';
import Footer from './component/footer/footer.component';


class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <About />
          <Resume />
          <Portfolio portfolioPath='images/portfolio/' />
          <CallToAction />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
