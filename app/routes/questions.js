import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
        title: '',
        question: 'George Bush or Bill Clinton?',
        answer: 'Bill Clinton',
        author: 'A.G',
        notes: 'Tests how conservative or liberal you are.'
      },

      {
        question: 'Perception or Reality?',
        answer: 'Perception',
        author: 'A.G',
        notes: 'Tests how you view life.'
      },

      {
        question: 'Observant or Intuitive?',
        answer: 'Intuitive',
        author: 'A.G',
        notes: 'Tests how you become aware of your environment.'
      },

      {
        question: 'Extrovert or Introvert?',
        answer: 'Extrovert',
        author: 'A.G',
        notes: 'Tests whether you gain energy from people or self.'
      }
    ];
  }
});
