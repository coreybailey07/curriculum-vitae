const INITIAL_STATE = {
  item: [
    {
      href: '#modal-01',
      img: [{
        src: 'droplet.jpg',
        srcSet1: 'droplet.jpg 1x',
        srcSet2: 'droplet@2x.jpg 2x',
        alt: 'Droplet'
      }]
    },
    {
      href: '#modal-02',
      img: [{
        src: 'lamp.jpg',
        srcSet1: 'lamp.jpg 1x',
        srcSet2: 'lamp@2x.jpg 2x',
        alt: 'Lamp'
      }]
    },
    {
      href: '#modal-03',
      img: [{
        src: 'minimalismo.jpg',
        srcSet1: 'minimalismo.jpg 1x',
        srcSet2: 'minimalismo@2x.jpg 2x',
        alt: 'Minimalismo'
      }]
    },
    {
      href: '#modal-04',
      img: [{
        src: 'shutterbug.jpg',
        srcSet1: 'shutterbug.jpg 1x',
        srcSet2: 'shutterbug@2x.jpg 2x',
        alt: 'Shutterbug'
      }]
    },
    {
      href: '#modal-05',
      img: [{
        src: 'fuji.jpg',
        srcSet1: 'fuji.jpg 1x',
        srcSet2: 'fuji@2x.jpg 2x',
        alt: 'Fuji'
      }]
    },
    {
      href: '#modal-06',
      img: [{
        src: 'skaterboy.jpg',
        srcSet1: 'skaterboy.jpg 1x',
        srcSet2: 'skaterboy@2x.jpg 2x',
        alt: 'Skaterboy'
      }]
    },
    {
      href: '#modal-07',
      img: [{
        src: 'rucksack.jpg',
        srcSet1: 'rucksack.jpg 1x',
        srcSet2: 'rucksack@2x.jpg 2x',
        alt: 'Rucksack'
      }]
    },
    {
      href: '#modal-08',
      img: [{
        src: 'sanddunes.jpg',
        srcSet1: 'sanddunes.jpg 1x',
        srcSet2: 'sanddunes@2x.jpg 2x',
        alt: 'Sanddunes'
      }]
    }
  ]
};

const portfolioReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default portfolioReducer;