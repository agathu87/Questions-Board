import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      question: 'George Bush or Bill Clinton?',
      answer: 'Bill Clinton',
      author: 'B.C',
      notes: 'Tests how conservative or liberal you are.',
    }];
  }
});
