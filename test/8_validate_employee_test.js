
const assert = require('assert');
const Employee = require('../src/employee');

describe('Validating Employee Records', () => {
	
	it('Fetch an employee details and validate it !!', () => {
		const emp = new Employee({name:undefined});
		const validationResult = emp.validateSync();
		const {message} = validationResult.errors.name;
		assert(message === 'Employee Name is required.');
	});
	
	it('Validates a user\' name. Name required longer than 2 characters', () => {
		const emp = new Employee({name:'A'});
		const validationResult = emp.validateSync();
		const {message} = validationResult.errors.name;
		assert(message === 'Employee Name must be longer than 2 characters');
	});
	
	it('Disallow invalid records from getting saved', (done) => {
		const emp = new Employee({name:'A'});
		emp.save()
			.catch( (validationResult) => {
				const {message} = validationResult.errors.name;
				assert(message === 'Employee Name must be longer than 2 characters');
				done();
			});
	});
	
});
