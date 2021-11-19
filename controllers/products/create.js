const { StatusCodes } = require('http-status-codes');

const { create } = require('../../services/products');
const { isExists } = require('../../services/validations/auxFunctions');

const createProduct = async (req, res, next) => {
  const { name, quantity } = req.body;

  const newProduct = {
    name,
    quantity,
  };

  const result = await create(newProduct);

  if (!result) return next(isExists('Product'));

  return res.status(StatusCodes.CREATED).json(result);
};

module.exports = createProduct;
