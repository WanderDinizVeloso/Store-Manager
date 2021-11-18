const connection = require('../connection');

const dbUpdate = async (collection, document) => {
  const { _id, ...documentWitchoutId } = document;

  await connection()
    .collection(collection)
    .updateOne(
      { _id },
      { $set: documentWitchoutId },
    );

  return document;
};

module.exports = dbUpdate;
