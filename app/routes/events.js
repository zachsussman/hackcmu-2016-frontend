import Ember from 'ember';

export default Ember.Route.extend({
  events: [
    {name: 'A', description: 'About A', time: 'Time of A', location: 'A\'s location', id: 0},
    {name: 'B', description: 'About B', time: 'Time of B', location: 'B\'s location', id: 1},
    {name: 'C', description: 'About C', time: 'Time of C', location: 'C\'s location', id: 2},
    {name: 'D', description: 'About D', time: 'Time of D', location: 'D\'s location', id: 3}
  ],

  model() {
    return this.get('events');
  }
});
