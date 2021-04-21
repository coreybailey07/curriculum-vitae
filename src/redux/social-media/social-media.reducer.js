const INITIAL_STATE = {
  company: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/',
      selector: 'fab fa-facebook-square'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/?lang=en',
      selector: 'fab fa-twitter'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
      selector: 'fab fa-instagram'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/',
      selector: 'fab fa-dribbble'
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/',
      selector: 'fab fa-behance'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/',
      selector: 'fab fa-linkedin'
    }
  ]
};

const socialMediaReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default socialMediaReducer;