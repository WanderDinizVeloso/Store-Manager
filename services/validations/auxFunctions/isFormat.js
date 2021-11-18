const { StatusCodes } = require('http-status-codes');

function isFormat(param) {
  return {
    status: StatusCodes.UNPROCESSABLE_ENTITY,
    code: 'invalid_data',
    message: `Wrong ${param} format`,
  };
}

module.exports = isFormat;
