import Ember from 'ember';

export default Ember.Route.extend({
  e: null,
  model () {
    if (!this.get('e')) {
      this.set('e', this.store.createRecord('event'));
    }
    return this.get('e');
  },
  actions: {
    submit() {
      // save new event
      this.transitionTo('events');
    }
  }
});
