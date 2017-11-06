import Ember from 'ember';
import Route from '@ember/routing/route';

const {
    RSVP
} = Ember

export default Route.extend({
    model() {
        return RSVP.hash({
            beers: this.store.findAll('beer')
        });
    },

    setupController(controller, models) {
        controller.set('beers', models.beers);
    }
});