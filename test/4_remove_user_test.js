
const assert = require('assert');
const User = require('../src/users');

describe('Deleting a User', () => {
	
	let Dela;
	
	beforeEach((done) => {
		Dela = new User({name:'Dela'});
		
		Dela.save()
			.then( () => done());
	});
	
	
	it('Model Instance remove', (done) => {
		Dela.remove()
			.then(() => User.findOne({name:'Dela'}))
			.then((user) => {
				assert(user === null);
				done();
			});
			
	})
	
	it('Class Instance remove', (done) => {
		// Remove bunch of records with some given criteria
		User.remove({name:'Dela'})
			.then(() => User.findOne({name:'Dela'}))
			.then((user) => {
				assert(user === null);
				done();
			});
	})
	
	it('Class Method findOneAndRemove', (done) => {
		User.findOneAndRemove({name:'Dela'})
			.then(() => User.findOne({name:'Dela'}))
			.then((user) => {
				assert(user === null);
				done();
			});
	})
	
	it('Class Method findByIdAndRemove', (done) => {
		User.findByIdAndRemove(Dela._id)
			.then(() => User.findOne({name:'Dela'}))
			.then((user) => {
				assert(user === null);
				done();
			});
	})
});
