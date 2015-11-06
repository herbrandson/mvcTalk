import Ember from 'ember';
import CartItem from './cart-item';

var Cart = Ember.Object.extend({
	total: function() {
		// calculate sub total for items
		var items = this.get('items');
		var subTotal = items.reduce(function(previousValue, item) {
			var itemTotal = item.quantity * item.price + item.shipping;
			return previousValue + itemTotal;
		}, 0);

		// apply discount
		var discount = this.get('discount');
		var discountedAmount = subTotal - (subTotal * discount);

		// calculate total after taxes
		var taxRate = this.get('taxRate');
		return discountedAmount * (1 + taxRate);

	}.property()
});

export default Cart;

export function getCart() {
	return Cart.create({
		discount: 0.1,
		taxRate: 0.1,

		items: [
			CartItem.create({
				name: 'used napkins',
				quantity: 3,
				price: 2,
				shipping: 2
			}),
			CartItem.create({
				name: 'rotten tomatoes',
				quantity: 1,
				price: 10,
				shipping: 0
			}),
			CartItem.create({
				name: 'rocks',
				quantity: 10,
				price: 2,
				shipping: 10
			}),
			CartItem.create({
				name: 'train engine',
				quantity: 1,
				price: 100,
				shipping: 1000000
			}),
		]
	});
}
