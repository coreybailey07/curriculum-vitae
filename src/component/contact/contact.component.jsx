import React from 'react'

import './contact.component.jsx'

export const Contact = () => (
  <section id='contact' class='s-contact target-section'>

    <div class='row s-contact__header'>
      <div class='column large-12'>
        <h3 class='section-header-allcaps'>Say Hello</h3>
      </div>
    </div>

    <div class='row s-contact__content'>

      <div class='column large-7 medium-12'>

        <h4 class='huge-text'>
          Have a new project in mind? Let's collaborate and build something awesome.
          Let's turn that idea to an even greater product :)
          </h4>

      </div>

      <div class='column large-4 medium-12'>

        <div class='row contact-infos'>
          <div class='column large-12 medium-6 tab-12'>
            <div class='contact-block'>
              <h5 class='contact-block__header'>
                Email
                      </h5>
              <p class='contact-block__content'>
                <a class='mailtoui' href='mailto:sayhello@ceevee.com'>sayhello@ceevee.com</a>
              </p>
            </div>
          </div>
          <div class='column large-12 medium-6 tab-12'>
            <div class='contact-block'>
              <h5 class='contact-block__header'>
                Phone
                      </h5>
              <p class='contact-block__content'>
                <a href='tel:+1975432345'>+197 543 2345</a>
              </p>
            </div>
          </div>

          <div class='column large-12'>
            <a href='mailto:sayhello@ceevee.com' class='mailtoui btn btn--primary h-full-width'>Let's Talk</a>
          </div>
        </div>

      </div>
    </div>

  </section>
)