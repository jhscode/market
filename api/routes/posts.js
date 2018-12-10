const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next ) => {
  try {
    const docs = await Ads.find({});
  } catch(e) {
    next(e);
  }
});

module.exports = router;