const db = require('../database/connection');

const Transaction = {};

Transaction.all = () => {
  return db.any(`
  SELECT * 
  FROM transactions`);
};

Transaction.buy = data =>
  db.none(
    `
    BEGIN TRANSACTION;

    UPDATE users
    SET cash = cash - ${data.qty * data.price}
    WHERE email = '${data.email}';

    INSERT INTO transactions (email, timestamp, ticker, price, qty, total, type) 
    VALUES ('${data.email}', '${data.timestamp}', '${data.ticker}', ${data.price}, ${data.qty}, ${data.total}, '${data.type}') 
    RETURNING *;

    INSERT INTO holdings (email, ticker, qty) 
    VALUES ('${data.email}', '${data.ticker}', ${data.qty}) 
    RETURNING *;

    COMMIT;
    `, data
  );

module.exports = Transaction;