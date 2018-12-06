const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res, next) => {
  // 1. Get the email and password from req.body
  const { email, password } = req.body;
  // 2. Look in our database for an email that matches the req.email
  try {
    const user = await User.findOne({ email });
    // 3. If the posted password matches the document's password
    if (user.password === password) {
      // 4. Send back the full user document
      res.status(200).send({ data: [user] });
    } else {
      throw new Error('unauthorized');
    }
  } catch(e) {
    // 5. Otherwise send back the unauthorized error
    next(e);
  }
});

module.exports = router;