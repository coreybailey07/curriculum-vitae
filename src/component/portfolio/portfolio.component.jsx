import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectPortfolioItem } from '../../redux/portfolio/portfolio.selector';

import './portfolio.style.scss';

const Portfolio = ({ portfolio, portfolioPath }) => (

  <section id='portfolio' className='s-portfolio target-section'>

    <div className='row s-portfolio__header'>
      <div className='column large-12'>
        <h3>A Few Of My Latest Creations</h3>
      </div>
    </div>

    <div className='row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list'>
      {portfolio.map((portfolio, i) => (
        <div key={i} className='column folio-item'>
          <a href={portfolio.href} className='folio-item__thumb'>
            {portfolio.img.map((img, i) => (
              <img
                src={`${portfolioPath}${img.src}`}
                srcSet={`${portfolioPath}${img.srcSet1}, ${portfolioPath}${img.srcSet2}`}
                alt={img.alt}
              />
            ))}
          </a>
        </div>
      ))}
    </div>

  </section>

)

const mapStateToProps = createStructuredSelector({
  portfolio: selectPortfolioItem
})

export default connect(mapStateToProps)(Portfolio);