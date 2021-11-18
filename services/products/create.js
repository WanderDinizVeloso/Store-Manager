const { dbCreate } = require('../../models/crudFunctions')('products');

const create = async (product) => dbCreate(product);

module.exports = create;
