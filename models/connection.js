const { MongoClient } = require('mongodb');

require('dotenv').config();

const URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/StoreManager`;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DB_NAME = 'StoreManager';

let connection = null;

const DBConnection = async () => {
  const CONNECTION_ON = (await MongoClient
    .connect(URL, OPTIONS).db(DB_NAME));

  if (!connection) {
    connection = CONNECTION_ON;
  }

  return connection;
};

module.exports = DBConnection;
