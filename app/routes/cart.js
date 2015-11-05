import Ember from 'ember';
import { getCart } from '../models/cart';

export default Ember.Route.extend({
	model: getCart
});
