const assert = require('assert');
const User = require('../src/users');
const BlogPost = require('../src/blogPost');
const Comment = require('../src/comment');

describe('Association', () => {
	let ascUer, blogPost, comment;
	
	beforeEach( (done) => {
		ascUer = new User({name:'associationUser'});
		
		blogPost = new BlogPost({title:'JS is great',content:'Yep, It is !!'});
		
		comment = new Comment({comment : 'Congratulation for the great poost !!!'});
		
		ascUer.blogPosts.push(blogPost);
		blogPost.comments.push(comment);
		comment.user = ascUer;
		
		Promise.all([ascUer.save(),blogPost.save(),comment.save()])
			.then(() => done());
		
	});
	
	it.only('Saves a relation between a user and a blogpost', (done) => {
		User.findOne({name:'associationUser'})
			.populate('blogPosts')
			.then((user) => {
				console.log(user);
				done();
			});
		
	});
});