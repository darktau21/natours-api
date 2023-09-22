const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    trim: true,
    minLength: [3, 'A user name must have more or equal than 3 characters'],
    maxLength: [30, 'A user name must have less or equal than 30 characters'],
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
    trim: true,
    minLength: [8, 'A user password must have more or equal than 8 characters'],
    maxLength: [30, 'A user password must have less or equal than 30 characters'],
    select: false,
  },
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    trim: true,
    unique: [true, 'This user already registered'],
    minLength: [5, 'A user email must have more or equal than 5 characters'],
    maxLength: [50, 'A user email must have less or equal than 50 characters'],
    validate: [validator.isEmail, 'A user email must be a valid email'],
    lowercase: true,
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  passwordChangedAt: Date,
}, {
  methods: {
    async validatePassword(candidatePassword) {
      return await bcrypt.compare(candidatePassword, this.password);
    },

    isTokenStale(JWTTimestamp) {
      if (!this.passwordChangedAt) return false;
      const changedTimestamp = this.passwordChangedAt.getTime() / 1000;

      return JWTTimestamp < changedTimestamp;
    }
  }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
})


module.exports = mongoose.model('User', userSchema);
