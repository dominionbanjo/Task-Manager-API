class customError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (message, statusCode) => {
  return new customError(msg, statusCode);
};

module.exports = { createCustomError, customError };
