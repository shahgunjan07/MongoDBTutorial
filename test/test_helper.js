const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users_test');
mongoose.connection
	.once('open', () => console.log('Good To Go !!'))
	.on('error', (error) => {
		console.warn('Warning',error);
	});