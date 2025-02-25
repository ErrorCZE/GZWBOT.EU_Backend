const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/grenades', (req, res) => {
	let grenades = JSON.parse(fs.readFileSync('./data/Grenades.json'));

	res.render('main/grenades', {
		grenades,
	});
});

module.exports = router;
