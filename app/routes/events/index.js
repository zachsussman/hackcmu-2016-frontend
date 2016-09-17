import Ember from 'ember';

export default Ember.Route.extend({
  deDuplicate(a) {
   var temp = {};
   for (var i = 0; i < a.length; i++)
       temp[a[i]] = true;
   var r = [];
   for (var k in temp)
       r.pushObject(k);
   return r;
 },

  model () {
    // return this.store.findAll('event');
    let es = this.controllerFor('events').get('events');
    let user = this.controllerFor('events').model
    let interests = user.interests;
    let events = [];

    let flag = false;
    for (let e of es) {
      for (let i of e.interests) {
        if (interests.contains(i) || e.owner == user.pid) {
          events.pushObject(e);
          break;
        }
      }
    }

    return {events, user: this.controllerFor('events').model};
  }
});
