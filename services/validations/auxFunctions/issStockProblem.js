const { StatusCodes } = require('http-status-codes');

function isStockProblem() {
  return {
    status: StatusCodes.NOT_FOUND,
    code: 'stock_problem',
    message: 'Such amount is not permitted to sell',
  };
}

module.exports = isStockProblem;
