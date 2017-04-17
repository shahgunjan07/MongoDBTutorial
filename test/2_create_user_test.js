const assert = require('assert');
const User = require('../src/users');

describe('Creating Records', () => {
	it('Saves a User',(done) => {
		const gunjan = new User({name:'Gunjan'});
		gunjan.save().then( () => {
				//Has Gunjan been successfully added ??
				assert(!gunjan.isNew);
				console.log('Is User Added to MongoDB ? Status Check : '+!gunjan.isNew);
				done();
		});
	});
});


