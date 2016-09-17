import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this.controllerFor('index').get('currentUser'));
    this.controllerFor('events').set('model', this.controllerFor('index').get('users')[this.controllerFor('index').get('currentUser')]);
    return this.controllerFor('index').get('users')[this.controllerFor('index').get('currentUser')];
  },

  actions: {
    logout () {
      this.transitionTo('index');
    }
  }
});
