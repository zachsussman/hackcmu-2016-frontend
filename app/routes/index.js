import Ember from 'ember';

export default Ember.Route.extend({
  account: null,

  model () {
  },

  actions: {
    login () {
      this.transitionTo('login');
    }
  }
});
