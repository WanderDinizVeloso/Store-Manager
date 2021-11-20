const { isStockProblem } = require('./auxFunctions');

const { readAll } = require('../products');

const isValidInventory = async (req, _res, next) => {
  const newSale = req.body;

  const { products } = await readAll();

  let problem = 0;

  products.forEach((product) => {
    newSale.forEach((sale) => {
      if (product.quantity <= sale.quantity) {
        problem += 1;
      }
    });
  });

  if (problem > 0) return next(isStockProblem());

  next();
};

module.exports = isValidInventory;
