const express = require('express');
const router = express.Router();

router.get('/no-mobile-support', (req, res) => {
  res.render('main/mobilesupport', {});
});

module.exports = router;

