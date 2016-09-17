import Ember from 'ember';

export default Ember.Route.extend({
  account: null,

  model () {
    if (!this.get('account')) {
      let pid = Math.max(...this.controllerFor('index').get('users').map((u) => u.pid)) + 1;
      this.set('account', {pid, firstname: '', lastname: '', email: '', interests: []});
    }
    return this.get('account');
  },

  actions: {
    login () {
      this.transitionTo('login');
    },
    newAccount () {
      let a = this.get('account');
      a.name = a.firstname + ' ' + a.lastname;

      let newinterests = a.interests.map((i) => i.iid);
      Ember.set(a, 'interests', newinterests);

      this.controllerFor('index').get('users').pushObject(a);
      this.controllerFor('index').set('currentUser', a.pid);
      this.set('account', null);
      this.transitionTo('events');
    }
  }
});
