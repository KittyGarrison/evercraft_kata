const Character = require('./character') ;
const Battle = require('./battle') ;
// const does not get hoisted so we have to call export after we require character to a const
module.exports = {Character, Battle};
