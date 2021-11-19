const express = require('express');

const { wrapper } = require('../middlewares');

const {
  isValidQuantSales,
  isValidProductIdSales,
} = require('../services/validations');

const {
  create,
  readAll,
  // readById,
  // update,
  // remove,
} = require('../controllers/sales');

const router = express.Router({ mergeParams: true });

router.get('/',
  wrapper(readAll));

// router.get('/:id',
//   wrapper(readById));

router.post('/',
  wrapper(isValidQuantSales),
  wrapper(isValidProductIdSales),
  wrapper(create));

// router.put('/:id',
//   wrapper(update));

// router.delete('/:id',
//   wrapper(remove));

module.exports = router;
