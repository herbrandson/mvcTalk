import { moduleFor, test } from 'ember-qunit';

moduleFor('model:cart-item', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});
