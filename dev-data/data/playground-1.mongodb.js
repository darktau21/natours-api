// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('natours');

// Create a new document in the collection.
db.getCollection('tours').insertMany([
  {
    "id": 0,
    "name": "The Forest Hiker",
    "duration": 5,
    "maxGroupSize": 25,
    "difficulty": "easy",
    "ratingAverage": 4.7,
    "ratingQuantity": 37,
    "price": 397,
    "summary": "Breathtaking hike through the Canadian Banff National Park",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "imageCover": "tour-1-cover.jpg",
    "images": [
      "tour-1-1.jpg",
      "tour-1-2.jpg",
      "tour-1-3.jpg"
    ],
    "startDates": [
      "2021-04-25,10:00",
      "2021-07-20,10:00",
      "2021-10-05,10:00"
    ]
  },
  {
    "id": 1,
    "name": "The Sea Explorer",
    "duration": 7,
    "maxGroupSize": 15,
    "difficulty": "medium",
    "ratingAverage": 4.8,
    "ratingQuantity": 23,
    "price": 497,
    "summary": "Exploring the jaw-dropping US east coast by foot and by boat",
    "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "imageCover": "tour-2-cover.jpg",
    "images": [
      "tour-2-1.jpg",
      "tour-2-2.jpg",
      "tour-2-3.jpg"
    ],
    "startDates": [
      "2021-06-19,10:00",
      "2021-07-20,10:00",
      "2021-08-18,10:00"
    ]
  },
  {
    "id": 2,
    "name": "The Snow Adventurer",
    "duration": 4,
    "maxGroupSize": 10,
    "difficulty": "difficult",
    "ratingAverage": 4.5,
    "ratingQuantity": 13,
    "price": 997,
    "summary": "Exciting adventure in the snow with snowboarding and skiing",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
    "imageCover": "tour-3-cover.jpg",
    "images": [
      "tour-3-1.jpg",
      "tour-3-2.jpg",
      "tour-3-3.jpg"
    ],
    "startDates": [
      "2022-01-05,10:00",
      "2022-02-12,10:00",
      "2023-01-06,10:00"
    ]
  },
  {
    "id": 3,
    "name": "The City Wanderer",
    "duration": 9,
    "maxGroupSize": 20,
    "difficulty": "easy",
    "ratingAverage": 4.6,
    "ratingQuantity": 54,
    "price": 1197,
    "summary": "Living the life of Wanderlust in the US' most beatiful cities",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat lorem ipsum dolor sit amet.\nConsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!",
    "imageCover": "tour-4-cover.jpg",
    "images": [
      "tour-4-1.jpg",
      "tour-4-2.jpg",
      "tour-4-3.jpg"
    ],
    "startDates": [
      "2021-03-11,10:00",
      "2021-05-02,10:00",
      "2021-06-09,10:00"
    ]
  },
  {
    "id": 4,
    "name": "The Park Camper",
    "duration": 10,
    "maxGroupSize": 15,
    "difficulty": "medium",
    "ratingAverage": 4.9,
    "ratingQuantity": 19,
    "price": 1497,
    "summary": "Breathing in Nature in America's most spectacular National Parks",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!",
    "imageCover": "tour-5-cover.jpg",
    "images": [
      "tour-5-1.jpg",
      "tour-5-2.jpg",
      "tour-5-3.jpg"
    ],
    "startDates": [
      "2021-08-05,10:00",
      "2022-03-20,10:00",
      "2022-08-12,10:00"
    ]
  },
  {
    "id": 5,
    "name": "The Sports Lover",
    "duration": 14,
    "maxGroupSize": 8,
    "difficulty": "difficult",
    "ratingAverage": 4.7,
    "ratingQuantity": 28,
    "price": 2997,
    "summary": "Surfing, skating, parajumping, rock climbing and more, all in one tour",
    "description": "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nVoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!",
    "imageCover": "tour-6-cover.jpg",
    "images": [
      "tour-6-1.jpg",
      "tour-6-2.jpg",
      "tour-6-3.jpg"
    ],
    "startDates": [
      "2021-07-19,10:00",
      "2021-09-06,10:00",
      "2022-03-18,10:00"
    ]
  },
  {
    "id": 6,
    "name": "The Wine Taster",
    "duration": 5,
    "maxGroupSize": 8,
    "difficulty": "easy",
    "ratingAverage": 4.5,
    "ratingQuantity": 35,
    "price": 1997,
    "summary": "Exquisite wines, scenic views, exclusive barrel tastings,  and much more",
    "description": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "imageCover": "tour-7-cover.jpg",
    "images": [
      "tour-7-1.jpg",
      "tour-7-2.jpg",
      "tour-7-3.jpg"
    ],
    "startDates": [
      "2021-02-12,10:00",
      "2021-04-14,10:00",
      "2021-09-01,10:00"
    ]
  },
  {
    "id": 7,
    "name": "The Star Gazer",
    "duration": 9,
    "maxGroupSize": 8,
    "difficulty": "medium",
    "ratingAverage": 4.7,
    "ratingQuantity": 28,
    "price": 2997,
    "summary": "The most remote and stunningly beautiful places for seeing the night sky",
    "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "imageCover": "tour-8-cover.jpg",
    "images": [
      "tour-8-1.jpg",
      "tour-8-2.jpg",
      "tour-8-3.jpg"
    ],
    "startDates": [
      "2021-03-23,10:00",
      "2021-10-25,10:00",
      "2022-01-30,10:00"
    ]
  },
  {
    "id": 8,
    "name": "The Northern Lights",
    "duration": 3,
    "maxGroupSize": 12,
    "difficulty": "easy",
    "ratingAverage": 4.9,
    "ratingQuantity": 33,
    "price": 1497,
    "summary": "Enjoy the Northern Lights in one of the best places in the world",
    "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
    "imageCover": "tour-9-cover.jpg",
    "images": [
      "tour-9-1.jpg",
      "tour-9-2.jpg",
      "tour-9-3.jpg"
    ],
    "startDates": [
      "2021-12-16,10:00",
      "2022-01-16,10:00",
      "2022-12-12,10:00"
    ]
  }
]
);
