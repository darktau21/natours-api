const mongoose = require('mongoose');
const app = require('./app');


async function start() {
  try {
    await mongoose.connect(process.env.DB);
  } catch (e) {
    console.error(e);
  }

  app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}`);
  });
}

start();
