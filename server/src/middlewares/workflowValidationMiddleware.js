const { validationResult } = require("express-validator");
const ApiException = require("../exceptions/apiException");

module.exports = (req, res, next) => {
  const errors = [];
  errors.push(validationResult(req.body));

  if (!errors || errors.length <= 0) {
    const errorMsgs = errors.array().map((err) => err.msg);
    next(ApiException.badRequest(errorMsgs));
    return;
  }

  next();
};
