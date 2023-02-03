function sanitizeObject(obj) {
<<<<<<< HEAD
  const result = Object.entries(obj).reduce((map, [key, value]) => {
    if (value !== undefined) {
      map[key] = value;
    }
    return map;
  }, {});
  return result;
}

function buildResponse(data, errorMessage) {
  return {
    error: errorMessage ?? null,
    data,
  };
}

module.exports = {
  sanitizeObject,
  buildResponse,
};
=======
    const result = Object.entries(obj).reduce((map, [key, value]) => {
      if (value !== undefined) {
        map[key] = value;
      }
      return map;
    }, {});
    return result;
  }
  
  function buildResponse(data, errorMessage) {
    return {
      error: errorMessage ?? null,
      data,
    };
  }
  
  module.exports = {
    sanitizeObject,
    buildResponse,
  };
  
>>>>>>> b493113efb923d4e9a7a695044b57f1ba0b462a2
