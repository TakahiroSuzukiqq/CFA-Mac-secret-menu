const mongoose = require('mongoose');
const { Schema } = mongoose;

const macSchema = new Schema({
	name: {
		type: String,
		trim: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
})

const Mac = mongoose.model('Mac', macSchema);

module.exports = Mac;
