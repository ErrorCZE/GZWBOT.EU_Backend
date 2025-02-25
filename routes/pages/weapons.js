const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/weapons', (req, res) => {
	let weapons = JSON.parse(fs.readFileSync('./data/Weapons.json'));

	res.render('main/weapons', {
		weapons,
	});
});

module.exports = router;
