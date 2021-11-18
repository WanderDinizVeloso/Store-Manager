const { dbReadById } = require('../../models/crudFunctions')('products');

const readById = async (id) => dbReadById(id);

module.exports = readById;
