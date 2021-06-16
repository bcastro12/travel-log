const Log = require('../models/Log');

exports.index = (req, res) => {
	
	Log.find({}, (err, logs) => {
		if(err) {
			console.log(err);
			return res.status(400).json({
				success: 0,
				msg: err.message
			});
		}
		res.status(200).json(logs);
	});
};

exports.create = (req, res) => {
	console.log(req.body);
	Log.create({
		title: req.body.title,
		description: req.body.description,
		imageUrl: req.body.image,
		dateVisited: req.body.date,
		latitude: req.body.latitude,
		longitude: req.body.longitude
	},(err,log)=>{
		if(err) {
			console.log(err);
			return res.status(400).json({
				success: 0,
				msg: err.message
			});
		}
		console.log('Salvo!');
		return res.status(200).json(log);
	});
};

exports.update = (req,res) => {
	const id = req.params.id;

	Log.findByIdAndUpdate(id, {name: req.body.name}, (err,result)=>{
		if(err) {
			console.log(err);
			return res.status(400).json({
				success: 0,
				msg: err.message
			});
		}
		return res.status(200).json(result);
	});

}

exports.delete = (req,res) => {
	const id = req.params.id;
	Log.findByIdAndDelete(id,(err,log)=>{
		if(err) {
			console.log(err);
			return res.status(400).json({
				success: 0,
				msg: err.message
			});
		}
		return res.status(200).json(log);
	})
}