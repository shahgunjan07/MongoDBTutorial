
const assert = require('assert');
const User = require('../src/users');

describe('Updating a User', () => {
	
	let user;
	
	beforeEach((done) => {
		
		
		
		user = new User({name:'ClassUpdate'});
		
		user.save()
			.then( () => done());
	});
	
	function assertName(operation,done,nameStr){
		operation
			.then(() => User.find({name:nameStr}))
			.then((users) => {
				console.log('-----------------------------------------------------------------')
				console.log(users[0])
				assert(users.length === 1);
				assert(users[0].name === nameStr);
				done();
				console.log('------------------------------------------------------------------')
			});
	}
	
	
	
	it('A Model class can update', (done) => {
		assertName(User.update({name:'ClassUpdate'},{name:'ClassUpdate2'}),done,'ClassUpdate2');
	});

	
	
	
	it('A Model class can update one records by ID', (done) => {
		assertName(User.findByIdAndUpdate(user._id,{name:'ClassUpdate3'}),done,'ClassUpdate3');
	});
	

	
	it('A Model class can update one record', (done) => {
		assertName(User.findOneAndUpdate({name: 	'ClassUpdate3'}, {name: 'ClassUpdate4'}),done,'ClassUpdate4');
	});
	

	
	
});
