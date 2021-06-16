const {mongoose} = require('../config/db');

const logSchema = new mongoose.Schema({ 
	title: { 
		type: String,
		required: true,
	},
	description: String,
	dateVisited: {
		type: Date,
		required: true
	},
	latitude: String,
	longitude: String,
	imageUrl: String
}, {versionKey: false});
const Log = mongoose.model("Log", logSchema);

module.exports = Log;