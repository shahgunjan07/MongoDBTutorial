const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
	name:{
			type:String,
			required:[true,'Name is required.']
		},
	postCount:Number
});

const employee = mongoose.model('employee',employeeSchema);
module.exports = employee;