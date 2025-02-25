const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/backpacks', (req, res) => {
	let backpacks = JSON.parse(fs.readFileSync('./data/Backpacks.json'));

	res.render('main/backpacks', {
		backpacks,
	});
});

module.exports = router;
