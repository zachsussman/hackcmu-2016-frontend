import Ember from 'ember';

export default Ember.Controller.extend({
  users: [
    { pid: 0, name: 'Zach Sussman', email: 'zsussman@andrew.cmu.edu', interests: [0, 1]},
    { pid: 1, name: 'Jake Olkin', email: 'jolkin@andrew.cmu.edu', interests: [0, 2]}
  ],

  currentUser: 1,
  interests: [
    {name: 'Technology', iid: 0},
    {name: 'Arts', iid: 1},
    {name: 'Science', iid: 2},
    {name: 'Adventure', iid: 3}
  ]
});
