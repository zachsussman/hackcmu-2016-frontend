import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      // save new event
      this.transitionTo('events');
    }
  }
});
