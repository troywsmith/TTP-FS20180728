const db = require('../database/connection');

const Holdings = {};

Holdings.all = () => {
  return db.any(`
  SELECT * 
  FROM users`);
};

Holdings.findById = user_id =>
  db.one(`
  SELECT * 
  FROM holdings 
  WHERE user_id = $1`, [user_id]);

module.exports = User;