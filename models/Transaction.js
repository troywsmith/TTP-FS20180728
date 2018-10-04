const db = require('../database/connection');

const Transaction = {};

Transaction.all = () => {
  return db.any(`
  SELECT * 
  FROM transactions`);
};

// Transaction.create = transaction => {
//   return db.one(`
//   INSERT INTO transactions (email, type, ticker, qty, price, timestamp) 
//   VALUES ($<email>, $<type>, $<ticker>, $<qty>, $<price>, $<timestamp>) 
//   RETURNING *`, transaction);
// };

Transaction.buy = data =>
  db.none(
    `
    BEGIN TRANSACTION;

    UPDATE users
    SET cash = cash - ${data.qty * data.price}
    WHERE email = '${data.email}';

    INSERT INTO transactions (email, type, ticker, qty, price, timestamp) 
    VALUES ('${data.email}', '${data.type}', '${data.ticker}', ${data.qty}, ${data.price}, '${data.timestamp}') 
    RETURNING *;

    INSERT INTO holdings (email, ticker, qty) 
    VALUES ('${data.email}', '${data.ticker}', ${data.qty}) 
    RETURNING *;

    COMMIT;
    `, data
  );
  
  // CREATE TABLE holdings (
  //   id SERIAL PRIMARY KEY,
  //   email TEXT ,
  //   ticker TEXT,
  //   qty TEXT
  // );

module.exports = Transaction;