const { StatusCodes } = require('http-status-codes');

function isNaturalNumber(param) {
  return {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: `"${param}" must be larger than or equal to 1`,
  };
}

module.exports = isNaturalNumber;
