const { isNaturalNumber, isNumber } = require('./auxFunctions');

const isValidQuantity = (req, _res, next) => {
  const { quantity } = req.body;

  if (typeof quantity !== 'number') {
    return next(isNumber('quantity'));
  }

  if (quantity <= 0) {
    return next(isNaturalNumber('quantity'));
  }

  next();
};

module.exports = isValidQuantity;
