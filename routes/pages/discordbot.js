const express = require('express');
const router = express.Router();

router.get('/discord-bot', (req, res) => {
  res.render('main/discordbot', {});
});

module.exports = router;
