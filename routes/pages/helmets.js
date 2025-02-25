const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/helmets', (req, res) => {
	let helmets = JSON.parse(fs.readFileSync('./data/Helmets.json'));

	res.render('main/helmets', {
		helmets,
	});
});

module.exports = router;
