const { StatusCodes } = require('http-status-codes');

const { remove } = require('../../services/sales');
const { isFormat } = require('../../services/validations/auxFunctions');

const removeSales = async (req, res, next) => {
  const { id } = req.params;

  const sales = await remove(id);

  if (!sales) return next(isFormat('sale Id'));

  return res.status(StatusCodes.OK).json(sales);
};

module.exports = removeSales;
