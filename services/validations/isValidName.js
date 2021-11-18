const { isLength } = require('./auxFunctions');

const isValidName = (req, _res, next) => {
  const { name } = req.body;

  if (typeof name !== 'string' || name.length < 5) {
    return next(isLength('name', 5));
  }

  next();
};

module.exports = isValidName;
