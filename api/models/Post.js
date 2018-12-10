const { Schemam, model } = require('mongoose');
const bcrypt = require('bcryptjs');

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

userSchema.pre('')