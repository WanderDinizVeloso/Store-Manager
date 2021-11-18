const express = require('express');

const { wrapperOfMiddlewares } = require('../middlewares');

const {
  create,
  readAll,
  readById,
  update,
  remove,
} = require('../controllers/products');

const router = express.Router({ mergeParams: true });

router.get('/',
  wrapperOfMiddlewares(readAll));

router.get('/:id',
  wrapperOfMiddlewares(readById));

router.post('/',
  wrapperOfMiddlewares(create));

router.put('/:id',
  wrapperOfMiddlewares(update));

router.delete('/:id',
  wrapperOfMiddlewares(remove));

module.exports = router;
