const { dbRemove } = require('../../models/crudFunctions')('products');

const remove = async (id) => dbRemove(id);

module.exports = remove;
