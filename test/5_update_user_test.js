
const assert = require('assert');
const User = require('../src/users');

describe('Updating a User', () => {
	
	let gunjan;
	
	beforeEach((done) => {
		gunjan = new User({name:'Gunjan'});
		
		gunjan.save()
			.then( () => done());
	});
	
	function assertName(operation,done,name){
		operation
			.then(() => User.find({}))
			.then((users) => {
				console.log('-----------------------------------------------------------------')
				console.log(users[0])
				assert(users.length === 1);
				assert(users[0].name === name);
				done();
				console.log('------------------------------------------------------------------')
			});
	}
	
	it('Instance Type Using Set N Save', (done) => {
		console.log("Before Updating :");
		console.log(gunjan)
		
		gunjan.set({'name':'GSSHAH'});
		
		console.log("After Updating : ");
		console.log(gunjan);
		
		assertName(gunjan.save(),done,'GSSHAH');

	});
	
	
	it('A Model instance can update', (done) => {
		assertName(gunjan.update({name:'GSSHAH2'}),done,'GSSHAH2');
	});
	

	
});
