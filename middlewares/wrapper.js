const wrapper = (handler) => async (_rec, _res, next) => {
  try {
    return handler();
  } catch (error) {
    return next(error);
  }
};

module.exports = wrapper;
