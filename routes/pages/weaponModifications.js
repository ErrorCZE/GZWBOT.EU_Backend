const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/weapon-modifications', (req, res) => {
	let auxiliary = JSON.parse(fs.readFileSync('./data/weapon_mods/Auxiliary.json'));
	let barrels = JSON.parse(fs.readFileSync('./data/weapon_mods/Barrels.json'));
	let bufferTubes = JSON.parse(fs.readFileSync('./data/weapon_mods/BufferTubes.json'));
	let chargingHandles = JSON.parse(fs.readFileSync('./data/weapon_mods/ChargingHandles.json'));
	let colimators = JSON.parse(fs.readFileSync('./data/weapon_mods/Colimators.json'));
	let foreGrips = JSON.parse(fs.readFileSync('./data/weapon_mods/ForeGrips.json'));
	let gasBlocks = JSON.parse(fs.readFileSync('./data/weapon_mods/GasBlocks.json'));
	let handguards = JSON.parse(fs.readFileSync('./data/weapon_mods/Handguards.json'));
	let ironSights = JSON.parse(fs.readFileSync('./data/weapon_mods/IronSights.json'));
	let magazines = JSON.parse(fs.readFileSync('./data/weapon_mods/Magazines.json'));
	let mounts = JSON.parse(fs.readFileSync('./data/weapon_mods/Mounts.json'));
	let muzzleDevices = JSON.parse(fs.readFileSync('./data/weapon_mods/MuzzleDevices.json'));
	let pistolGrips = JSON.parse(fs.readFileSync('./data/weapon_mods/PistolGrips.json'));
	let scopes = JSON.parse(fs.readFileSync('./data/weapon_mods/Scopes.json'));
	let slides = JSON.parse(fs.readFileSync('./data/weapon_mods/Slides.json'));
	let stocks = JSON.parse(fs.readFileSync('./data/weapon_mods/Stocks.json'));
	let suppressors = JSON.parse(fs.readFileSync('./data/weapon_mods/Suppressors.json'));
	let upperReceivers = JSON.parse(fs.readFileSync('./data/weapon_mods/UpperReceivers.json'));

	res.render('main/weaponModifications', {
		auxiliary,
		barrels,
		bufferTubes,
		chargingHandles,
		colimators,
		foreGrips,
		gasBlocks,
		handguards,
		ironSights,
		magazines,
		mounts,
		muzzleDevices,
		pistolGrips,
		scopes,
		slides,
		stocks,
		suppressors,
		upperReceivers
	});
});

module.exports = router;
