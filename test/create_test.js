const assert = require('assert');
const User = require('../src/users');

describe('Creating Records', () => {
	it('Saves a User',() => {
		const gunjan = new User({name:'Gunjan'});
		gunjan.save();
	});
});