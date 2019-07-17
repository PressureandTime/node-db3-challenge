const db = require('../dbConfig');

function find() {
  return db('schemes');
}


module.exports = {
  find,
}
