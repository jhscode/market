const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async (req, res, next) => {
  const { email, price, desc, } = req.body;
  const post = new Post({ email, price, desc });
  try {
    const doc = await post.save();
  } catch(e) {
    next(e);
  }
});

module.exports = router;