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

test('it can calculate the sub total', function(assert) {
  var model = getCart();
  var total = model.get('subTotal');

  assert.equal(total, 1000166.48);
});

test('it can calculate the discount amount', function(assert) {
  var model = getCart();
  var amount = model.get('discountAmount');

  assert.equal(amount, 20003.3296);
});

test('it can calculate the sub total after discount', function(assert) {
  var model = getCart();
  var amount = model.get('subTotalAfterDiscount');

  assert.equal(amount, 980163.1503999999);
});

test('it can calculate the total', function(assert) {
  var model = getCart();
  var total = model.get('total');

  assert.equal(total, 1029171.3079199999);
});
