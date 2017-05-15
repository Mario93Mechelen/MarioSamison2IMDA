var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Message = new Schema({
	user: String,
	message: String
});

module.exports = mongoose.model('Message', Message);
