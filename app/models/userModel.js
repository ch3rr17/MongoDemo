//Pulls Mongoose dependency for creating schemas
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Creates a beer schema
var UserSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	age: {
		type: String,
		required: true,
	}
});


//Exports UserList Schema
module.exports = mongoose.model('users', UserSchema);