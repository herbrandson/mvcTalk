import { moduleFor, test } from 'ember-qunit';

moduleFor('model:cart-item', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});

test('it can calculate the sub total', function(assert) {
  var model = this.subject();
  model.set('price', 5);
  model.set('quantity', 2);
  var subTotal = model.get('subTotal');

  assert.equal(subTotal, 10);
});

test('it can calculate the total', function(assert) {
  var model = this.subject();
  model.set('price', 5);
  model.set('quantity', 2);
  model.set('shipping', 4);
  var total = model.get('total');

  assert.equal(total, 14);
});
