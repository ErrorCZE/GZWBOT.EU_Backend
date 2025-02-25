const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/quest-items', (req, res) => {
	let questItems = JSON.parse(fs.readFileSync('./data/QuestItems.json'));

	res.render('main/questItems', {
		questItems,
	});
});

module.exports = router;
