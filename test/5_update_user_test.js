
const assert = require('assert');
const User = require('../src/users');

describe('Updating a User', () => {
	
	let udipi;
	
	beforeEach((done) => {
		udipi = new User({name:'udipi'});
		
		udipi.save()
			.then( () => done());
	});
	
	function assertName(operation,done,nameStr){
		operation
			.then(() => User.find({name:nameStr}))
			.then((users) => {
				console.log('-----------------------------------------------------------------')
				console.log(users[0])
				console.log("Number of Users :"+users.length)
				assert(users.length === 1);
				assert(users[0].name === nameStr);
				done();
				console.log('------------------------------------------------------------------')
			});
	}
	
	it('Instance Type Using Set N Save', (done) => {
		console.log("Before Updating :");
		console.log(udipi)
		
		udipi.set({'name':'GSSHAH'});
		
		console.log("After Updating : ");
		console.log(udipi);
		
		assertName(udipi.save(),done,'GSSHAH');

	});
	
	
	it('A Model instance can update', (done) => {
		assertName(udipi.update({name:'GSSHAH2'}),done,'GSSHAH2');
	});
	

	
});
