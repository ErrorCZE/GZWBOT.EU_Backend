const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/keys', (req, res) => {
	let keys = JSON.parse(fs.readFileSync('./data/Keys.json'));

	res.render('main/keys', {
		keys,
	});
});

module.exports = router;
