const { StatusCodes } = require('http-status-codes');

const { readById } = require('../../services/products');
const { isFormat } = require('../../services/validations/auxFunctions');

const readByIdProduct = async (req, res, next) => {
  const { id } = req.params;

  const product = await readById(id);

  if (!product) return next(isFormat('id'));

  return res.status(StatusCodes.OK).json(product);
};

module.exports = readByIdProduct;
