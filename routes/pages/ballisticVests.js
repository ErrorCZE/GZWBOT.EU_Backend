const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/ballistic-vests', (req, res) => {
	let ballisticsVests = JSON.parse(fs.readFileSync('./data/BallisticVests.json'));

	res.render('main/ballisticVests', {
		ballisticsVests,
	});
});

module.exports = router;
