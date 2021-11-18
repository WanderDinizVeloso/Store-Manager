const { StatusCodes } = require('http-status-codes');

const { create } = require('../../services/products');

const createProduct = async (req, res, _next) => {
  const { name, quantity } = req.body;

  const newProduct = {
    name,
    quantity,
  };

  const result = await create(newProduct);

  return res.status(StatusCodes.CREATED).json(result);
};

module.exports = createProduct;
