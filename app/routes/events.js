import Ember from 'ember';

export default Ember.Route.extend({
  events: [
    {name: 'A', description: 'About A', time: 'Time of A', location: 'A\'s location', id: 0},
    {name: 'B', description: 'About B', time: 'Time of B', location: 'B\'s location', id: 1},
    {name: 'C', description: 'About C', time: 'Time of C', location: 'C\'s location', id: 2},
    {name: 'D', description: 'About D', time: 'Time of D', location: 'D\'s location', id: 3},
    {name: 'E', description: 'About E', time: 'Time of E', location: 'E\'s location', id: 4},
    {name: 'F', description: 'About F', time: 'Time of F', location: 'F\'s location', id: 5},
    {name: 'G', description: 'About G', time: 'Time of G', location: 'G\'s location', id: 6},
    {name: 'H', description: 'About H', time: 'Time of H', location: 'H\'s location', id: 7},
    {name: 'I', description: 'About I', time: 'Time of I', location: 'I\'s location', id: 8},
    {name: 'J', description: 'About J', time: 'Time of J', location: 'J\'s location', id: 9},
    {name: 'K', description: 'About K', time: 'Time of K', location: 'K\'s location', id: 10},
  ],

  model() {
    return this.store.findAll('user');
  }
});
