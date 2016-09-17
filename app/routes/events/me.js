import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    let user = this.controllerFor('events').model;
    let events = this.controllerFor('events').get('events');

    let registered = events.filter((e) => e.attendees.contains(user.pid));
    let mine = events.filterBy('owner', user.pid);

    return {user, registered, mine};
  }
});
