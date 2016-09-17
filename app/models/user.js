import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  interests: DS.hasMany('interest'),
  eventsGoingTo: DS.hasMany('events')
});
