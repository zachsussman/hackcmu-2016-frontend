import Ember from 'ember';

export default Ember.Route.extend({
  m: {username: ''},
  model () {
    return this.get('m');
  },
  actions:  {
    signin () {
      let users = this.controllerFor('index').users;
      for (let i = 0; i < users.length; i++) {
        console.log(users[i].email);
        if (users[i].email === this.get('m').username) {
          this.controllerFor('index').set('currentUser', users[i].pid);
        }
      }
      Ember.run.later(() => this.transitionTo('events'), 500);
    }
  }
});
