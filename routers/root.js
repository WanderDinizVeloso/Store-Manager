const express = require('express');

const products = require('./products');

const root = express.Router({ mergeParams: true });

root.use('/products', products);

module.exports = root;
