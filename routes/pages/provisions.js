const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/provisions', (req, res) => {
	let drinks = JSON.parse(fs.readFileSync('./data/Drinks.json'));
	let meals = JSON.parse(fs.readFileSync('./data/Meals.json'));

	res.render('main/provisions', {
		drinks,
		meals
	});
});

module.exports = router;
