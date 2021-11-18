const { StatusCodes } = require('http-status-codes');

const error = async (err, _req, res, _next) => {
  try {
    const { status = null, code = null, message } = err;

    if (status) {
      return res
        .status(status)
        .json({ err: { code, message } });
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message });
  } catch (e) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: e.message });
  }
};

module.exports = error;
