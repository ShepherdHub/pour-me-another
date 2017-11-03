import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('beer');
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('beer', model);
  }
});
