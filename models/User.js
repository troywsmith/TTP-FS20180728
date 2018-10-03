const db = require('../database/connection');

const User = {};

User.all = () => {
  return db.any(`
  SELECT * 
  FROM users`);
};

//for login
User.findByEmail = email =>
  db.one(`
  SELECT * 
  FROM users 
  WHERE email = $1`, [email]);

//for register
User.create = user => {
  return db.one(`
  INSERT INTO users (name, email, password_digest, cash) 
  VALUES ($<name>, $<email>, $<password_digest>, 5000) 
  RETURNING *`, user);
};

module.exports = User;