const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Post = mongoose.model('Post', userSchema);

module.exports = Post;