module.exports = (err, req, res) => {
  setImmediate(() => {
    console.error(err);
  });
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
}