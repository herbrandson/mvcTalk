import { moduleFor, test } from 'ember-qunit';
import { getCart } from '../../../models/cart';

moduleFor('model:cart', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});

test('it can calculate the total', function(assert) {
	var model = getCart();
	var total = model.get('total');

	assert.equal(total, 1029171.30792);
});
