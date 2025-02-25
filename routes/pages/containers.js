const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/containers', (req, res) => {
	let containers = JSON.parse(fs.readFileSync('./data/Containers.json'));

	res.render('main/containers', {
		containers,
	});
});

module.exports = router;
