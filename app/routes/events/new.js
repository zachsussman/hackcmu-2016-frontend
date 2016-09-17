import Ember from 'ember';

export default Ember.Route.extend({
  e: null,
  model () {

    let user = this.controllerFor('events').model;
    if (!this.get('e')) {
      // this.set('e', this.store.createRecord('event'));
      this.set('e', {name: '', location: '', time: '', description: '', interests: [], attendees: [user.pid], owner: user.pid});
    }
    return this.get('e');
  },
  actions: {
    submit() {
      // save new event
      let allevents = this.controllerFor('events').get('events');
      let newinterests = [];
      console.log(this.get('e').interests);
      for (let i of this.get('e').interests) {
        newinterests.pushObject(i.iid);
      }
      this.set('e.interests', newinterests);

      this.set('e.id', Math.max(...allevents.map((e) => e.id))+1);

      allevents.pushObject(this.get('e'));
      this.set('e', null);
      this.transitionTo('events');
    }
  }
});
