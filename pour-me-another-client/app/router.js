import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('beers');
  this.route('beers.new', {path: 'beers/new'});
  this.route('beers.show', {path: 'beers/:beer_id'});
  this.route('beers.edit', {path: 'beers/edit/:beer_id'});
});

export default Router;
