import Ember from 'ember';
import CartItem from './cart-item';

var Cart = Ember.Object.extend({

});

export default Cart;

export function getCart() {
	return Cart.create({
		discount: 0.02,
		taxRate: 0.05,

		items: [
			CartItem.create({
				name: 'used napkins',
				quantity: 3,
				price: 5.5,
				shipping: 2
			}),
			CartItem.create({
				name: 'rotten tomatoes',
				quantity: 1,
				price: 9.99,
				shipping: 0
			}),
			CartItem.create({
				name: 'rocks',
				quantity: 10,
				price: 2,
				shipping: 10.99
			}),
			CartItem.create({
				name: 'train engine',
				quantity: 1,
				price: 107,
				shipping: 1000000
			}),
		]
	});
}
