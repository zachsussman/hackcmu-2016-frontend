import Ember from 'ember';

export default Ember.Controller.extend({
  users: [
    { pid: 0, name: 'Zach Sussman', email: 'zsussman@andrew.cmu.edu', interests: [0, 4, 10, 11, 14]},
    { pid: 1, name: 'Jake Olkin', email: 'jolkin@andrew.cmu.edu', interests: [1, 5, 7]}
  ],

  currentUser: 1,
  interests: [
    {name: 'Studying', iid: 0},
    {name: 'Partying', iid: 1},
    {name: 'Laser Tag', iid: 2},
    {name: 'Eating', iid: 3},
    {name: 'Learning', iid: 4},
    {name: 'Movies', iid: 5},
    {name: 'Coding', iid: 6},
    {name: 'Designing', iid: 7},
    {name: 'Playing', iid: 8},
    {name: 'Frisbee', iid: 9},
    {name: 'Not Studying', iid: 10},
    {name: 'Group Work', iid: 11},
    {name: 'Learning', iid: 12},
    {name: 'Sports', iid: 13},
    {name: 'Not Sleeping', iid: 14}
  ]
});
