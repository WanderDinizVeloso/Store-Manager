const { readById, update } = require('../products');

const inventory = async (sales, service) => {
  sales.forEach(({ productId, quantity }) => {
    const result = async () => {
      const product = await readById(productId);

      let difference = 0;

      if (service === 'create') {
        difference = product.quantity - quantity;
      }
      if (service === 'remove') {
        difference = product.quantity + quantity;
      }

      const newInventory = {
        ...product,
        quantity: difference,
      };

      await update(newInventory);
    };

    result();
  });
};

module.exports = inventory;
