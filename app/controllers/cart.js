import Ember from 'ember';

export default Ember.Controller.extend({
	total: function() {
		// calculate sub total for items
		var items = this.get('model.items');
		var subTotal = items.reduce(function(previousValue, item) {
			var itemTotal = item.quantity * item.price + item.shipping;
			return previousValue + itemTotal;
		}, 0);

		// apply discount
		var discount = this.get('model.discount');
		var discountedAmount = subTotal - (subTotal * discount);

		// calculate total after taxes
		var taxRate = this.get('model.taxRate');
		return discountedAmount * (1 + taxRate);

	}.property()
});
