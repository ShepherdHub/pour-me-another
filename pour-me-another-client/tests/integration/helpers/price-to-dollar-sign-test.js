
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('price-to-dollar-sign', 'helper:price-to-dollar-sign', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{price-to-dollar-sign inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

