const { StatusCodes } = require('http-status-codes');

function isLength(param, number) {
  return {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: `"${param}" length must be at least ${number} characters long`,
  };
}

module.exports = isLength;
