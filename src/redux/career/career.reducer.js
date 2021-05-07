const INITIAL_STATE = {
  item: [
    {
      section: 'Career',
      position: [
        {
          company: 'Dropbox',
          title: 'Product Designer',
          from: 'August 2019',
          to: 'Present',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.',
          listItems: [
            { item: 'Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet.' },
            { item: 'Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet.' },
            { item: 'Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet.' }
          ]
        }, {
          company: 'Facebook',
          title: 'UI/UX Designer',
          from: 'August 2016',
          to: 'July 2019',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.',
          listItems: [
            { item: 'Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet.' },
            { item: 'Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet.' },
            { item: 'Inventore vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet.' }
          ]
        }
      ]
    }
  ]
};

const careerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default careerReducer;