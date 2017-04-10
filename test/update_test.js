const assert = require('assert');
const User = require('../src/users');

describe('Updating a User', () => {
	
	let gunjan;
	
	beforeEach((done) => {
		gunjan = new User({name:'Gunjan'});
		
		gunjan.save()
			.then( () => done());
	});
	
	it('Instance Type Using Set N Save', (done) => {
		console.log("Before Updating :");
		console.log(gunjan)
		
		gunjan.set({'name':'GSSHAH'});
		
		console.log("After Updating : ");
		console.log(gunjan);
		
		gunjan.save()
			.then(() => User.find({}))
			.then((users) => {
				assert(users.length === 1);
				assert(users[0].name === 'GSSHAH');
				done();
			});
		
	});
	
	

});