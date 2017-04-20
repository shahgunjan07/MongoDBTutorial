const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
	name:{
			type:String,
			validate:{
				validator: (name) => name.length > 2,
				message:'Employee Name must be longer than 2 characters'
			},
			required:[true,'Employee Name is required.']
		},
	postCount:Number
});

const employee = mongoose.model('employee',employeeSchema);
module.exports = employee;