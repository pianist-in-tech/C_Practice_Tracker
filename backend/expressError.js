//extends the built-in Error class, is used as the base class for all custom errors in the file
class ExpressError extends Error {
    constructor(message, status) {
      super();
      this.message = message;
      this.status = status;
    }
  }
  
  /** 404 NOT FOUND error. */
  
  class NotFoundError extends ExpressError {
    constructor(message = "Not Found") {
      super(message, 404);
    }
  }
  
  /** 401 UNAUTHORIZED error. */
  
  class UnauthorizedError extends ExpressError {
    constructor(message = "Unauthorized") {
      super(message, 401);
    }
  }
  
  /** 400 BAD REQUEST error. */
  
  class BadRequestError extends ExpressError {
    constructor(message = "Bad Request") {
      super(message, 400);
    }
  }
  
  /** 403 BAD REQUEST error. */
  
  class ForbiddenError extends ExpressError {
    constructor(message = "Bad Request") {
      super(message, 403);
    }
  }
  
  module.exports = {
    ExpressError,
    NotFoundError,
    UnauthorizedError,
    BadRequestError,
    ForbiddenError,
  };
