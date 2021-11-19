const { isCorrectSale } = require('./auxFunctions');

const { readAll } = require('../products');

const ID_LENGTH = 24;

const isValidProductIdSales = async (req, _res, next) => {
  const newSale = req.body;

  const { products } = await readAll();

  let exists = 0;

  products.forEach(({ _id: searchId }) => {
    newSale.forEach(({ productId }) => {
      if (
        productId.length === ID_LENGTH
        && productId.toString() === searchId.toString()
      ) {
        exists += 1;
      }
    });
  });

  if (exists !== newSale.length) return next(isCorrectSale());

  next();
};

module.exports = isValidProductIdSales;
