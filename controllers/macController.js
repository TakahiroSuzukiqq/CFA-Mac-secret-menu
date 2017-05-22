const mongoose = require('mongoose');
const Mac = require('../models/Mac');


exports.getMacsApi = (req, res) => {
	Mac.find()
		.then(macs => {
			res.json(macs)
		})
};

exports.getNewmacsApi = (req, res) => {
	const name = req.query.name;
	let mac = new Mac();
	mac.name = name;
	mac.save()
		.then(() => {
			res.redirect('/macs/api')
		})
};

exports.getEditmacsApi = (req, res) => {
	Mac.findOne({ _id: req.params.id })
		.then(mac => {
			res.json(mac);
		})
};

exports.getDeletemacsApi = (req, res) => {
	Mac.findOne({ _id: req.params.id })
    .remove((err, data) => {
			res.redirect('/macs/api')
		});
};

exports.getNewmacs = (req, res) => {
	console.log('req.body is:', req.body);
	const name = req.body.mac_name;
	let mac = new Mac();
	mac.name = name;
	mac.save()
		.then(() => {
			res.redirect('/')
		})
};

exports.getMacs = (req, res) => {
	Mac.find()
		.then((macs) => {
			res.render('index', {
				title: 'Macs',
				macs: macs
			})
		})
};

exports.getEditmacs = (req, res) => {
	Mac.findOne({ _id: req.params.id })
		.then(mac => {
			res.render('editMac', {mac: mac});
		})
};

exports.postEditmacs = (req, res) => {
	console.log('reqy.body:', req.body);
	Mac.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true
	})
		.then(mac => {
			res.redirect('/')
		})
};

exports.getDeletemacs = (req, res) => {
	Mac.findOne({ _id: req.params.id })
    .remove((err, data) => {
			res.redirect('/')
		});
};

exports.getApimacs = (req, res) => {
	Mac.findOne({ _id: req.params.id })
	 .then(mac => {
		 res.json(mac)
	 })
}
