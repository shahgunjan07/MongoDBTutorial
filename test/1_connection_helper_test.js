const mongoose = require('mongoose');
let isSchemaDropped = false;

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
		
		if(!isSchemaDropped){
			
			isSchemaDropped = true;
			console.log("Dropping database schema !!!");
			
			try{
				
				/*
				if(mongoose.connection.collections.users != undefined){
					mongoose.connection.collections.users.drop(() => {
						//Ready to run new test !!
						console.log("---- Dropped User Schema ----");
					});
				}else{
					console.log("----  users Schema undefined----");
				}
				
				if(mongoose.connection.collections.comments != undefined){
					mongoose.connection.collections.comments.drop(() => {
						//Ready to run new test !!
						console.log("---- Dropped comments Schema ----");
					});
				}else{
					console.log("----  comments Schema undefined----");
				}
				
				if(mongoose.connection.collections.blogposts != undefined){
					mongoose.connection.collections.blogposts.drop(() => {
						//Ready to run new test !!
						console.log("---- Dropped blogposts Schema ----");
					});
				}else{
					console.log("----  blogposts Schema undefined----");
				}
				
				if(mongoose.connection.collections.employees != undefined){
					mongoose.connection.collections.employees.drop(() => {
						//Ready to run new test !!
						console.log("---- Dropped employees Schema ----");
					});
				}else{
					console.log("----  employees Schema undefined----");
				}
			
				*/
				
				const {users,comments,blogposts,employees} = mongoose.connection.collections;
				
				users.drop(() => {
					comments.drop(() => {
						blogposts.drop(() => {
							employees.drop(() => {
								console.log("**********************************************");
								console.log("**********************************************");
								console.log("******Dropped All Schema******");
								console.log("**********************************************");
								console.log("**********************************************");
								
							});
						});
					});
				});
				
			
			}catch(e){
				console.log(e);
			}
			
		}else{
			//console.log("Database schema is already dropped before !!!");
		}
	
		done();
		
	
});
