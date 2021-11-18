const { StatusCodes } = require('http-status-codes');

function isFound(param) {
  return {
    status: StatusCodes.NOT_FOUND,
    code: 'not_found',
    message: `${param} not found`,
  };
}

module.exports = isFound;
