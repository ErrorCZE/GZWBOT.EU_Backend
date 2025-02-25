const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/medical', (req, res) => {
	let bandages = JSON.parse(fs.readFileSync('./data/Bandages.json'));
	let blood = JSON.parse(fs.readFileSync('./data/Blood.json'));
	let painkillers = JSON.parse(fs.readFileSync('./data/Painkillers.json'));
	let splints = JSON.parse(fs.readFileSync('./data/Splints.json'));
	let stimulators = JSON.parse(fs.readFileSync('./data/Stimulators.json'));
	let surgerykits = JSON.parse(fs.readFileSync('./data/SurgeryKits.json'));
	let tourniquets = JSON.parse(fs.readFileSync('./data/Tourniquets.json'));

	res.render('main/medical', {
		bandages,
		blood,
		painkillers,
		splints,
		stimulators,
		surgerykits,
		tourniquets
	});
});

module.exports = router;
