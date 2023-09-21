const Tour = require('../models/Tour');
const ApiFeatures = require('../utils/ApiFeatures');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

module.exports.topFiveCheap = (req, res, next) => {
  req.query.limit = 5;
  req.query.sort = '-ratingAverage,price';
  req.query.select = 'name,price,ratingAverage,summary,difficulty';

  next();
};

module.exports.getMonthlyPlan = catchAsync(async (req, res) => {
  const year = +req.params.year;

  const plan = await Tour.aggregate([
    {$unwind: '$startDates'},
    {
      $match: {
        startDates: {
          $gte: new Date(year),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: {$month: '$startDates'},
        numTourStarts: {$sum: 1},
        tours: {$push: '$name'},
      },
    },
    {$addFields: {month: '$_id'}},
    {
      $project: {
        _id: 0,
      },
    },
    {$sort: {numTourStarts: -1}}
  ]);

  res.json({
    status: 'success',
    data: {
      plan,
    },
  });
});

module.exports.getAll = catchAsync(async (req, res) => {
  const toursQuery = new ApiFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .select()
    .paginate();

  res.json({
    status: 'success',
    data: {
      tours: await toursQuery.query,
    },
  });
});

module.exports.add = catchAsync(async (req, res) => {
  const tour = await Tour.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tour,
    },
  });
});

module.exports.getById = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);

  if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }

  res.json({
    status: 'success',
    data: {
      tour,
    },
  });
});

module.exports.updateById = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }

  res.json({
    status: 'success',
    data: {
      tour,
    },
  });
});

module.exports.deleteById = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);

  if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

module.exports.getToursStats = catchAsync(async (req, res) => {
  const tourStats = await Tour.aggregate([
    {$match: {ratingAverage: {$gte: 4.5}}},
    {
      $group: {
        _id: '$difficulty',
        ratingQuantity: {$sum: '$ratingQuantity'},
        numTours: {$sum: 1},
        avgRating: {$avg: '$ratingAverage'},
        avgPrice: {$avg: '$price'},
        minPrice: {$min: '$price'},
        maxPrice: {$max: '$price'},
      },
    }]);

  res.json({
    status: 'success',
    data: {
      tourStats,
    },
  });
});
