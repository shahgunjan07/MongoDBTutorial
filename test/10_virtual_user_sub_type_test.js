const assert = require('assert');
const User = require('../src/users');

describe('Virtual Types', () => {
	
	it('Virtual PostCount returns number of posts', (done) => {
		const virtualUser = new User({
			name:'virtualPostCount',
			posts: [{title:'PostTitle'}],
			likes:1	
		});
		
		virtualUser.save()
			.then( () => User.findOne({name:'virtualPostCount'}))
			.then((user) => {
				assert(user.postCount === 1);
				done();
			})
	});
	
});