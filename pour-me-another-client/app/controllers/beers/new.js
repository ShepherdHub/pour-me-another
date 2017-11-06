import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveBeer() {
      const beer = this.get('beer');

      beer.save()
        .then(() => {
          this.transitionToRoute('beers.show', this.get('beer.id'));
        });
    },

    onCancel() {
      const beer = this.get('beer');

      beer.destroyRecord()
        .then(() => {
          this.transitionToRoute('index');
        });
    }
  }
});
