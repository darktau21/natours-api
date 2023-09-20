const mongoose = require('mongoose');
const app = require('./app');


async function start() {
  await mongoose.connect(process.env.DB);

  app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}`);
  });
}

start();
