import Ember from 'ember';

export default Ember.Component.extend({
  going: Ember.computed('event.attendees', 'user.pid', function () {
    let event = this.get('event');
    return event.attendees.contains(this.get('user').pid);
  }),

  attendeeNumber: Ember.computed('event.attendees', function () {
    console.log(this.get('event.attendees.length'));
    return this.get('event.attendees.length');
  })
});
