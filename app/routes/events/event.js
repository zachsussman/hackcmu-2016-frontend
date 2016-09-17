import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    // return this.store.find('event', params.slug);

    let event = {};
    let events = this.controllerFor('events').get('events');
    for (let e of events) {
      if (e.id == params.id) {
        event = e;
      }
    }

    let is = [];
    for (let i of event.interests) {
      is.pushObject(this.controllerFor('events').get('interests')[i].name);
    }
    event.interestNames = is.join(', ');

    Ember.set(event, 'amGoing', event.attendees.contains(this.controllerFor('events').model.pid));

    return event;
  },

  actions: {
    signdown() {
      this.controllerFor(this.routeName).model.attendees.pushObject(this.controllerFor('events').model.pid);
      this.controllerFor(this.routeName).model.going += 1;
      this.transitionTo('events');
    }
  }
});
