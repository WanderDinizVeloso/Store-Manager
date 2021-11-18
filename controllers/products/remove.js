const { StatusCodes } = require('http-status-codes');

const { remove } = require('../../services/products');

const removeProduct = async (req, res, _next) => {
  const { id } = req.params;

  const product = await remove(id);

  return res.status(StatusCodes.OK).json(product);
};

module.exports = removeProduct;
