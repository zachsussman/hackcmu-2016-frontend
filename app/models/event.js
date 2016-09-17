import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  time: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('string'),
  attendees: DS.hasMany('user'),
  owner: DS.belongsTo('user'),
  interests: DS.hasMany('interest')
});
