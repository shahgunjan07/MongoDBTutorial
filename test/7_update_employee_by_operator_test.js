const assert = require('assert');
const Employee = require('../src/employee');

describe('Incremenring a employee details by MongoDB operator', () => {
	
	let employee;
	
	beforeEach((done) => {
		
		//REMOVE ALL EMPLOYEE FIRST
		Employee.find({name:'employee'})
			.then((employees) => {
				let emp;
				
				for(emp of employees){
					Employee.remove(emp);
				}
					
			})
		
			employee = new Employee({name:'employee',postCount:0});
			employee.save()
				.then( () => done());
	});
	
	it('Find Employee Detail in Database', (done) => {
		Employee.findOne({name:'employee'})
			.then((e) => {
				console.log('---------Employee details before increment-----------');
				console.log(e);
				done();
			});
	});
	
	it('Increment employee poostCount by 3', (done) => {
		Employee.update({name:'employee'},{$inc: {postCount:3}})
			.then(() => Employee.findOne({name:'employee'}))
			.then((e) =>{
				assert(e.postCount === 3);
				console.log('---------Employee details after increment-----------');
				console.log(e);
				done();
			});

	});
	
	
});