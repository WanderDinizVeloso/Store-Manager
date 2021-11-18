const { StatusCodes } = require('http-status-codes');

function isNumber(param) {
  return {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: `"${param}" must be a number`,
  };
}

module.exports = isNumber;
