const { isFormat } = require('./auxFunctions');

const ID_LENGTH = 24;

const isValidId = (req, _res, next) => {
  const { id } = req.params;

  if (id.length !== ID_LENGTH) {
    return next(isFormat('sale ID'));
  }

  next();
};

module.exports = isValidId;
