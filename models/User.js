const db = require('../database/connection');

const User = {};

// For full API data
User.all = () => {
  return db.any(`
  SELECT * 
  FROM users`);
};

// For register
User.create = user => {
  return db.one(`
  INSERT INTO users (name, email, password_digest, cash) 
  VALUES ($<name>, $<email>, $<password_digest>, 5000) 
  RETURNING *`, user);
};

// Get Login
User.findByEmail = email =>
  db.one(`
  SELECT * 
  FROM users 
  WHERE email = $1`, [email]);

// // For Cash Balance 
// User.getCash = user => {
//   return db.one(`
//   SELECT cash
//   FROM users
//   WHERE user_id = $1`, user)
// }

module.exports = User;