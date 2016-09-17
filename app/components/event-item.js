import Ember from 'ember';

export default Ember.Component.extend({
  amGoing: Ember.computed('event.attendees', 'user.pid', function () {
    let event = this.get('event');
    return event.attendees.contains(this.get('user').pid);
  })
});
