const { dbReadAll } = require('../../models/crudFunctions')('products');

const readAll = async () => dbReadAll();

module.exports = readAll;
