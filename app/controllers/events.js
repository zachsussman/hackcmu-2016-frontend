import Ember from 'ember';

export default Ember.Controller.extend({
  interests: [
    {name: 'Technology', iid: 1},
    {name: 'Arts', iid: 2},
    {name: 'Science', iid: 3},
    {name: 'Adventure', iid: 4}
  ],
  events: [
    {name: 'A', description: 'About A', time: 'Time of A', location: 'A\'s location', id: 0, interests: [0], attendees: [5], owner: 5},
    {name: 'B', description: 'About B', time: 'Time of B', location: 'B\'s location', id: 1, interests: [1, 3], attendees: [4], owner:4},
    {name: 'C', description: 'About C', time: 'Time of C', location: 'C\'s location', id: 2, interests: [3], attendees: [1], owner: 1},
    {name: 'D', description: 'About D', time: 'Time of D', location: 'D\'s location', id: 3, interests: [2], attendees: [0], owner: 0},
    {name: 'E', description: 'About E', time: 'Time of E', location: 'E\'s location', id: 4, interests: [0, 1], attendees: [1], owner: 1},
    {name: 'F', description: 'About F', time: 'Time of F', location: 'F\'s location', id: 5, interests: [0, 1, 2, 3], attendees: [0], owner: 0},
    {name: 'G', description: 'About G', time: 'Time of G', location: 'G\'s location', id: 6, interests: [1, 3], attendees: [4], owner: 4},
    {name: 'H', description: 'About H', time: 'Time of H', location: 'H\'s location', id: 7, interests: [1, 2], attendees: [3], owner: 3},
    {name: 'I', description: 'About I', time: 'Time of I', location: 'I\'s location', id: 8, interests: [0, 1], attendees: [2], owner: 2},
    {name: 'J', description: 'About J', time: 'Time of J', location: 'J\'s location', id: 9, interests: [1, 2], attendees: [6], owner: 6},
    {name: 'K', description: 'About K', time: 'Time of K', location: 'K\'s location', id: 10, interests: [1, 3], attendees: [8], owner: 8},
  ],
});
