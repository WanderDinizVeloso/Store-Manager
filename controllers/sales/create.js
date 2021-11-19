const { StatusCodes } = require('http-status-codes');

const { create } = require('../../services/sales');

const createSale = async (req, res, _next) => {
  const newSale = req.body;

  const result = await create(newSale);

  return res.status(StatusCodes.CREATED).json(result);
};

module.exports = createSale;
