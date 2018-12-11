const express = require('express');
const router = express.Router();

router.post('/', async (req, res, next) => {
  const { email, price, desc, } = req.body;
  try {
    res.send('postad route'); 
  } catch(e) {
    next(e);
  }
});

module.exports = router;