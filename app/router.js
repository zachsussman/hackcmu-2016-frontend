import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('events', function() {
    this.route('new');
    this.route('event', {path: ':id'});
    this.route('me');
  });
  this.route('login');
});

export default Router;
