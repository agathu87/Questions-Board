import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
        title: '',

        answer: 'Bill Clinton',
        author: 'A.G'

      },

      {

        answer: 'Perception',
        author: 'A.G'

      },

      {

        answer: 'Intuitive',
        author: 'A.G'

      },

      {

        answer: 'Extrovert',
        author: 'A.G'

      }
    ];
  }

});
