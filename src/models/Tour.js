const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: [true, 'A tour name must be unique'],
    trim: true,
    minLength: [5, 'A tour name must have more or equal than 5 characters'],
    maxLength: [40, 'A tour name must have less or equal than 40 characters'],
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
    trim: true,
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'A tour difficulty must be \'easy\', \'medium\' or \'difficult\'',
    },
  },
  ratingAverage: {
    type: Number,
    default: 0,
    min: [0, 'A tour rating should be at least 0'],
    max: [5, 'A tour rating should be less 5'],
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: Number,
  summary: {type: String, trim: true},
  description: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description'],
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
    trim: true,
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  secret: {
    type: Boolean,
    default: false,
  },
  startDates: [Date],
}, {strictQuery: true, toJSON: {virtuals: true}, toObject: {virtuals: true}});

tourSchema.virtual('durationWeeks').get(function () {
  return +(this.duration / 7).toFixed(2);
});

tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, {lower: true});
  next();
});

tourSchema.pre(/^find/, function (next) {
  this.find({secret: {$ne: true}}).select('-secret');

  next();
});

tourSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({$match: {secret: {$ne: true}}});
  next();
});

module.exports = mongoose.model('Tour', tourSchema);
