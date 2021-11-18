const { StatusCodes } = require('http-status-codes');

const { update, readById } = require('../../services/products');

const updateProduct = async (req, res, _next) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  const product = await readById(id);

  const updated = await update({
    ...product,
    name,
    quantity,
  });

  return res.status(StatusCodes.OK).json(updated);
};

module.exports = updateProduct;
