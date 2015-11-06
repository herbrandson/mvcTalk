import Ember from 'ember';
import CartItem from './cart-item';

var Cart = Ember.Object.extend({

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
