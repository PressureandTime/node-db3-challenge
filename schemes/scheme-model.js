const db = require('../dbConfig');

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where({ id });
}

function findSteps(schemeId) {
  return db('steps as s')
    .join('schemes as sch', 's.step_number', 'sch.id')
    .select(
      's.id',
      's.instructions',
      'sch.id as SchemeId',
      'sch.scheme_name as scheme',
    )
    .where({ step_number: schemeId });
}


function add({ scheme_name }) {
  return db('schemes').insert({ scheme_name });
}




module.exports = {
  find,
  findById,
  findSteps,
  add,
};
