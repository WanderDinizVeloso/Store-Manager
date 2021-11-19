const { isCorrectSale } = require('./auxFunctions');

const isValidQuantSales = (req, _res, next) => {
  const newSale = req.body;

  const isQuantityCorrect = newSale.some(({ quantity }) =>
    typeof quantity !== 'number'
    || quantity <= 0);

  if (isQuantityCorrect) return next(isCorrectSale());

  next();
};

module.exports = isValidQuantSales;
