const express = require('express');

const { wrapper } = require('../middlewares');

const {
  create,
  readAll,
  readById,
  update,
  remove,
} = require('../controllers/products');

const {
  isValidName,
  isValidQuantity,
  isValidId,
} = require('../services/validations');

const router = express.Router({ mergeParams: true });

router.get('/',
  wrapper(readAll));

router.get('/:id',
  wrapper(isValidId),
  wrapper(readById));

router.post('/',
  wrapper(isValidName),
  wrapper(isValidQuantity),
  wrapper(create));

router.put('/:id',
  wrapper(isValidId),
  wrapper(isValidName),
  wrapper(isValidQuantity),
  wrapper(update));

router.delete('/:id',
  wrapper(isValidId),
  wrapper(remove));

module.exports = router;
