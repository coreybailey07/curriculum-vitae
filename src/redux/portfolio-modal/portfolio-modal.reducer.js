const INITIAL_STATE = {
  itemModal: [
    {
      id: 'modal-01',
      imgSrc: 'droplet.jpg',
      title: 'Droplet',
      description: 'Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.',
      category: [
        'Branding', 'Product Design'
      ],
      projectLink: 'https://www.behance.net/'
    }, {
      id: 'modal-02',
      imgSrc: 'lamp.jpg',
      title: 'The Lamp',
      description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
      category: [
        'Branding'
      ],
      projectLink: 'https://www.behance.net/'
    }, {
      id: 'modal-03',
      imgSrc: 'minimalismo.jpg',
      title: 'Minimalismo',
      description: 'Exercitationem reprehenderit quod explicabo consequatur aliquid ut magni ut. Deleniti quo corrupti illum velit eveniet ratione necessitatibus ipsam mollitia.',
      category: [
        'Product Design'
      ],
      projectLink: 'https://www.behance.net/'
    }, {
      id: 'modal-04',
      imgSrc: 'shutterbug.jpg',
      title: 'Shutterbug',
      description: 'Dolores velit qui quos nobis. Aliquam delectus voluptas quos possimus non voluptatem voluptas voluptas. Est doloribus eligendi porro doloribus voluptatum.',
      category: [
        'E-Commerce'
      ],
      projectLink: 'https://www.behance.net/'
    }, {
      id: 'modal-05',
      imgSrc: 'fuji.jpg',
      title: 'Fuji',
      description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
      category: [
        'Product Design'
      ],
      projectLink: 'https://www.behance.net/'
    }, {
      id: 'modal-06',
      imgSrc: 'skaterboy.jpg',
      title: 'Skaterboy',
      description: 'Quisquam vel libero consequuntur autem voluptas. Qui aut vero. Omnis fugit mollitia cupiditate voluptas. Aenean sollicitudin, lorem quis bibendum auctor.',
      category: [
        'Branding', 'Product Design'
      ],
      projectLink: 'https://www.behance.net/'
    }, {
      id: 'modal-07',
      imgSrc: 'rucksack.jpg',
      title: 'Rucksack',
      description: 'Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.',
      category: [
        'Branding', 'Product Design'
      ],
      projectLink: 'https://www.behance.net/'
    }, {
      id: 'modal-08',
      imgSrc: 'sanddunes.jpg',
      title: 'Sand Dunes',
      description: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
      category: [
        'Web Design'
      ],
      projectLink: 'https://www.behance.net/'
    }
  ]
};

const portfolioModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default portfolioModalReducer;