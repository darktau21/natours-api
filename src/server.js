const mongoose = require('mongoose');
const app = require('./app');

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});

const unhandledError = (err) => {
  console.error('UNHANDLED ERROR! Shutting down...');
  console.error(err);
  server.close(() => process.exit(1));
}

process.on('unhandledRejection', unhandledError);
process.on('uncaughtException', unhandledError);

mongoose.connect(process.env.DB)
  .then(() => console.log('DB connection successful!'));
