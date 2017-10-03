import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
        title: '',
        question: 'George Bush or Bill Clinton?',

        author: 'A.G',
        notes: 'Tests how conservative or liberal you are.'
      },

      {
        question: 'Perception or Reality?',

        author: 'A.G',
        notes: 'Tests how you view life.'
      },

      {
        question: 'Observant or Intuitive?',

        author: 'A.G',
        notes: 'Tests how you become aware of your environment.'
      },

      {
        question: 'Extrovert or Introvert?',

        author: 'A.G',
        notes: 'Tests whether you gain energy from people or self.'
      }
    ];
  }
});
