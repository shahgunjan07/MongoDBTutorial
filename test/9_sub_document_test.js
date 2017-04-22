
const assert = require('assert');
const User = require('../src/users');

describe('Testing Subdocuments', () => {
	
	it('User schema may have subdocument', (done) => {
		const postMan = new User({
			name:'PostMan',
			posts: [{title:'PostTitle'}],
			postCount:1	
		});
		
		postMan.save()
			.then( () => User.findOne({name:'PostMan'}))
			.then((user) => {
				assert(user.posts[0].title === 'PostTitle');
				done();
			})
	});
	

		
	it('Adding subdocument to existing records', (done) => {
		const postMan = new User({
			name:'PostWalaKaka',
			posts: [],
			postCount:0	
		});
		
		
		postMan.save()
			.then(() => User.findOne({name:'PostWalaKaka'}))
			.then( (user) => {
				user.posts.push({title:'PostWalaKakaTitle'});
				user.set({postCount:1});
				return user.save();
			})
			.then( () => User.findOne({name:'PostWalaKaka'}))
			.then( (iuser) => {
				assert(iuser.posts[0].title === 'PostWalaKakaTitle')
				done();
			});
				
	});
	
		
	it('Removing sub-document from existing records', (done) => {
		const postMan = new User({
			name:'PostWalaKaka2',
			posts: [{title:'PostWalaKaka2'}],
			postCount:1	
		});
		
		
		postMan.save()
			.then(() => User.findOne({name:'PostWalaKaka2'}))
			.then( (user) => {
				const post = user.posts[0];
				post.remove();
				return user.save();
			})
			.then( () => User.findOne({name:'PostWalaKaka2'}))
			.then( (iuser) => {
				assert(iuser.posts.length === 0)
				done();
			});
				
	});
	
	
	
});
