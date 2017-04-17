
const assert = require('assert');
const Employee = require('../src/employee');

describe('Validating Employee Records', () => {
	
	it('Fetch an employee details and validate it !!', () => {
		const emp = new Employee({name:undefined});
		const validationResult = emp.validateSync();
		const {message} = validationResult.errors.name;
		assert(message === 'Name is required.');
	});
	
	
});
