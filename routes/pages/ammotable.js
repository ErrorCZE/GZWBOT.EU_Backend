const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/ammunition', (req, res) => {
	let ammoStats = JSON.parse(fs.readFileSync('./data/Ammunition.json'));

	res.render('main/ammunition', {
		ammoStats
	});
});

module.exports = router;
