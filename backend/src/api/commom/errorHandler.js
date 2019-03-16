const forIn = require('lodash/forIn');

module.exports = ( req, res, next ) => {
  const bundle = res.locals.bundle;
  if(bundle.errors){
    const errors = parseErrors(bundle.errors);
    res.status(500).json({ errors });
  } else {
    next()
  }
}

const parseErrors = (nodeRestfulErrors) => {
  const errors = [];
  forIn(nodeRestfulErrors, error => errors.push(error.message))
  
  return errors;
}