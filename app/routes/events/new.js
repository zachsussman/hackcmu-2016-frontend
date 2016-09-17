import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit() {
      // save new event
      this.transitionTo('events');
    }
  }
});
