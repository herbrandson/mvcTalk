import { moduleFor, test } from 'ember-qunit';
import { getCart } from '../../../models/cart';

moduleFor('controller:cart', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});

test('it can calculate the total', function(assert) {
	var controller = this.subject();
	var data = getCart();
	controller.set('model', data);
	var total = controller.get('total');

	assert.equal(total, 1029171.30792);
});
