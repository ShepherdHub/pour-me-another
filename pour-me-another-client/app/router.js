import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('beers', function() {
    this.route('new');
    this.route('show', {path: '/:beer_id'});
    this.route('edit', {path: '/edit/:beer_id'});
  });
});

export default Router;
