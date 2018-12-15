const express = require('express');
const router = express.Router();

// GET all posts
router.get('/', async (req, res, next ) => {
  try {
    const docs = await Todo.find({});
    res.status(200).json({ data: docs });
  } catch(e) {
    next(e);
  }
});


// GET individual post
router.get('/:postid', async (req, res, next) => {
  try {
    const { postid } = req.params;
    
  } catch(e) {
    next(e);
  }
});

module.exports = router;