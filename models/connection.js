const { MongoClient } = require('mongodb');

const URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/StoreManager`;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DB_NAME = 'StoreManager';

let connection = null;

const DBConnection = async () => {
  if (!connection) {
    connection = (await MongoClient.connect(
      URL,
      OPTIONS,
    )).db(DB_NAME);
  }

  return connection;
};

module.exports = DBConnection;
