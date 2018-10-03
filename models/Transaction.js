const db = require('../database/connection');

const Transaction = {};

Transaction.all = () => {
  return db.any(`
  SELECT * 
  FROM transactions`);
};

Transaction.create = transaction => {
  return db.one(`
  INSERT INTO transactions (email, type, ticker, qty, price, timestamp) 
  VALUES ($<email>, $<type>, $<ticker>, $<qty>, $<price>, $<timestamp>) 
  RETURNING *`, transaction);
};

module.exports = Transaction;