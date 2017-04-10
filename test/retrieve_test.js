const User = require('../src/users');
const assert = require('assert');

describe('Reading user out of the database', () => {
	
	let joe;
	
	beforeEach((done) => {
		joe = new User({name:'Joe'});
		joe.save()
			.then(() => done());	
	});
	
	it('finds all user with name of Joe', (done) => {
		User.find({name:'Joe'})
			.then((users) => {
				
				console.log('ID of JOE '+joe._id);
				console.log('ID of Retreived User '+users[0]._id);
				
				assert(joe._id.toString() === users[0]._id.toString());
				done();
				
			});
	});
	
	
	it('find a user with a particular record', (done) => {
		User.findOne({_id:joe._id})
			.then((user) => {
				assert(user.name === 'Joe');
				done();
			});
		
	});
});