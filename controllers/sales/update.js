const { StatusCodes } = require('http-status-codes');

const { update, readById } = require('../../services/sales');

const updateProduct = async (req, res, _next) => {
  const { id } = req.params;
  const newSale = req.body;

  const product = await readById(id);

  const updated = await update({
    ...product,
    itensSold: newSale,
  });

  return res.status(StatusCodes.OK).json(updated);
};

module.exports = updateProduct;
