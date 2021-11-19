const { dbUpdate } = require('../../models/crudFunctions')('sales');

const update = async (sale) => dbUpdate(sale);

module.exports = update;
