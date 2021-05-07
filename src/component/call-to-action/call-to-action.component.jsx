import React from 'react';

import { Button } from '../button/button.component';

import './call-to-action.style.scss';

export const CallToAction = () => (
    <section id="call-to-action" className='s-cta'>

        <div className='row'>
            <div className='column'>
                <h3 className='h2 section-desc'>
                    Need a great reliable web hosting?
                </h3>
            </div>
        </div>

        <div className='row cta-content'>
            <div className='column'>
                <p>
                    We highly recommend <a href='https://www.dreamhost.com/r.cgi?287326'>DreamHost</a>.
                    Powerful web and Wordpress hosting. Guaranteed.
                    Starting at $2.95 per month.
                </p>
                <Button value='Get Started' hyperLink='https://www.dreamhost.com/r.cgi?287326' />
            </div>
        </div>

    </section>
)
