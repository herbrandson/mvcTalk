import Ember from 'ember';

export default Ember.Object.extend({
	subTotal: function() {
		return this.get('quantity') * this.get('price');
	}.property(),

	total: function() {
		return this.get('subTotal') + this.get('shipping');
	}.property()
});
