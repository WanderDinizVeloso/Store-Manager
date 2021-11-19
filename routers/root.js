const express = require('express');

const products = require('./products');
const sales = require('./sales');

const root = express.Router({ mergeParams: true });

root.use('/products', products);
root.use('/sales', sales);

module.exports = root;
