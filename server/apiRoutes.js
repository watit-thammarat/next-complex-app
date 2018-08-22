const express = require('express');

const router = express.Router();

router.route('/home').get((_, res) => {
  res.json({ message: 'api home' });
});

module.exports = router;
