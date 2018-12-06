const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', async function(next) {
  const user = this;
  // if the user's password has changed since the last time the user was saved, or if this is a completely new user
  if (user.isModified('password') || user.isNew) {
    try {
      // hash their password
      const hash = await bcrypt.hash(user.password, 10);
      // set their password to be equal to the hash
      user.password = hash;
      next();
    } catch (e) {
      next(e);
    }
  } else {
    return next();
  }
})

module.exports = model('Users', userSchema);