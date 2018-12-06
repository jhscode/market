const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res, next) => {
  // Get the email and password from the request body
  const { email, password } = req.body;
  // Create a new user using the User model
  try {
    // Save that user into th edatabse
    const user = new User({ email, password });
    const doc = await user.save();
    res.status(200).send({ data: [doc] });
  } catch(e) {
    // If there's an error, send back the error
    next(e);
  }
});

module.exports = router;
