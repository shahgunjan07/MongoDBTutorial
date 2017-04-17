
const assert = require('assert');
const User = require('../src/users');

describe('Deleting a User', () => {
	
	let joe;
	
	beforeEach((done) => {
		joe = new User({name:'Joe'});
		
		joe.save()
			.then( () => done());
	});
	
	
	it('Model Instance remove', (done) => {
		joe.remove()
			.then(() => User.findOne({name:'Joe'}))
			.then((user) => {
				assert(user === null);
				done();
			});
			
	})
	
	it('Class Instance remove', (done) => {
		// Remove bunch of records with some given criteria
		User.remove({name:'Joe'})
			.then(() => User.findOne({name:'Joe'}))
			.then((user) => {
				assert(user === null);
				done();
			});
	})
	
	it('Class Method findOneAndRemove', (done) => {
		User.findOneAndRemove({name:'Joe'})
			.then(() => User.findOne({name:'Joe'}))
			.then((user) => {
				assert(user === null);
				done();
			});
	})
	
	it('Class Method findByIdAndRemove', (done) => {
		User.findByIdAndRemove(joe._id)
			.then(() => User.findOne({name:'Joe'}))
			.then((user) => {
				assert(user === null);
				done();
			});
	})
});
