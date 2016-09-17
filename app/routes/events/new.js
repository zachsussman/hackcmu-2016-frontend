import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return {name: '', description: '', location: '', time: ''};
  },
  actions: {
    submit() {
      // save new event
      this.transitionTo('events');
    }
  }
});
