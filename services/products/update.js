const { dbUpdate } = require('../../models/crudFunctions')('products');

const update = async (product) => dbUpdate(product);

module.exports = update;
