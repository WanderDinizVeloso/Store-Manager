const { isFound } = require('./auxFunctions');

const ID_LENGTH = 24;

const isValidId = (req, _res, next) => {
  const { id } = req.params;

  if (id.length !== ID_LENGTH) {
    return next(isFound('Sale'));
  }

  next();
};

module.exports = isValidId;
