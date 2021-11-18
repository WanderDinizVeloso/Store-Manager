const { StatusCodes } = require('http-status-codes');

function isCorrectSale() {
  return {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
  };
}

module.exports = isCorrectSale;
