import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectPortfolioModalItem } from '../../redux/portfolio-modal/portfolio-modal.selector';

import './portfolio.style.scss';

const PortfolioModal = ({ portfolioModal }) => (

  portfolioModal.map((modal, i) => (
    <div key={i} id={modal.id} hidden>
      <div className='modal-popup'>
        <img src={`images/portfolio/gallery/g-${modal.img}`} alt={modal.title} />

        <div className='modal-popup__desc'>
          <h5>{modal.title}</h5>
          <p>{modal.description}</p>
          <ul className='modal-popup__cat'>
            {modal.category.map((cat, i) => (
              <li key={i}>{cat}</li>
            ))}
          </ul>
        </div>

        <a href={modal.projectLink} className='modal-popup__details'>Project link</a>
      </div>
    </div>
  ))

)

const mapStateToProps = createStructuredSelector({
  portfolioModal: selectPortfolioModalItem
})

export default connect(mapStateToProps)(PortfolioModal);