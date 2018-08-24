const Character = require('./character') ;
// const does not get hoisted so we have to call export after we require character to a const
module.exports = {Character};
