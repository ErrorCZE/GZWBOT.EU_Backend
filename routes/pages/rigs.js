const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/rigs', (req, res) => {
	let tacticalRigs = JSON.parse(fs.readFileSync('./data/TacticalRigs.json'));
	let armorPlateCarriers = JSON.parse(fs.readFileSync('./data/ArmorPlateCarriers.json'));

	res.render('main/rigs', {
		tacticalRigs,
		armorPlateCarriers
	});
});

module.exports = router;
