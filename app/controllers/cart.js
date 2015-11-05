import Ember from 'ember';

export default Ember.Controller.extend({
	total: function() {
		var items = this.get('model.items') || [];

		var subTotal = items.reduce(function(previousValue, item) {
			var itemTotal = item.quantity * item.price + item.shipping;
			return previousValue + itemTotal;
		}, 0);

		var taxRate = this.get('model.taxRate');
		var total = subTotal * (1 + taxRate);

		var discount = this.get('model.discount');
		return total - (total * discount);

	}.property()
});
