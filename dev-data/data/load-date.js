require('dotenv').config()
const mongoose = require('mongoose');
const fs = require('fs');
const Tour = require('../../src/models/Tour')

async function start() {
  await mongoose.connect(process.env.DB);

  const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'))
  await Tour.create(tours);
}

start();
