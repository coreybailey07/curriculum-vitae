import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCareerItem } from '../../redux/career/career.selector';

import './career.style.scss';

const Career = ({ career }) => (

  career.map((car, i) => (
    <div key={i} className='row s-resume__section'>
      <div className='column large-3 tab-12'>
        <h3 className='section-header-allcaps'>{car.section}</h3>
      </div>
      <div className='column large-9 tab-12'>
        {car.position.map((pos, j) => (
          <div key={j + 1} className='resume-block'>

            <div className='resume-block__header'>
              <h4 className='h3'>{pos.company}</h4>
              <p className='resume-block__header-meta'>
                <span>{pos.title}</span>{' '}
                <span className='resume-block__header-date'>
                  {' '}{pos.from} - {pos.to}
                </span>
              </p>
            </div>

            <p>{pos.description}</p>

          </div>
        ))}
      </div>
    </div>
  ))

)

const mapStateToProps = createStructuredSelector({
  career: selectCareerItem
})

export default connect(mapStateToProps)(Career);