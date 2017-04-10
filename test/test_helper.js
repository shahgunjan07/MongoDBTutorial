const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

before((done) => {
	mongoose.connect('mongodb://localhost:27017/users_test');
	mongoose.connection
		.once('open', () => {
			console.log('Connected to Mongose DB !!');
			done();
		})
		.on('error', (error) => {
			console.warn('Error while connecting to Mongose DB !!',error);
		});
	
});

		
beforeEach((done) => {
		mongoose.connection.collections.users.drop(() => {
			//Ready to run new test !!
			done();
		});
	
});