const db = require('../database/connection');

const Holding = {};

// For full API data
Holding.all = () => {
  return db.any(`
  SELECT * 
  FROM holdings`);
};

Holding.findById = user_id =>
  db.one(`
  SELECT * 
  FROM holdings 
  WHERE user_id = $1`, [user_id]);

module.exports = Holding;