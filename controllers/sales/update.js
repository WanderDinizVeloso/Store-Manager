const { StatusCodes } = require('http-status-codes');

const { update, readById } = require('../../services/sales');

const updateSales = async (req, res, _next) => {
  const { id } = req.params;
  const newSale = req.body;

  const sale = await readById(id);

  const updated = await update({
    ...sale,
    itensSold: newSale,
  });

  return res.status(StatusCodes.OK).json(updated);
};

module.exports = updateSales;
