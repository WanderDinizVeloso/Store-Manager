const { StatusCodes } = require('http-status-codes');

function isExists(param) {
  return {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: `${param} already exists`,
  };
}

module.exports = isExists;
