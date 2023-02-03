class AppError extends Error {
<<<<<<< HEAD
  constructor(name, httpCode, description) {
    super(description);

    this.name = name;
    this.httpCode = httpCode;
    Error.captureStackTrace(this);
  }
}

module.exports = AppError;
=======
    constructor(name, httpCode, description) {
      super(description);
  
      this.name = name;
      this.httpCode = httpCode;
      Error.captureStackTrace(this);
    }
  }
  
module.exports = AppError;
  
>>>>>>> b493113efb923d4e9a7a695044b57f1ba0b462a2
