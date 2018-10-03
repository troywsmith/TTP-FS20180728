DROP DATABASE IF EXISTS stock_portfolio;

CREATE DATABASE stock_portfolio;

\c stock_portfolio;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS holdings;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password_digest TEXT NOT NULL,
  cash INTEGER CHECK (cash > -1)
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  type TEXT NOT NULL,
  ticker TEXT,
  qty INTEGER CHECK (qty > 0),
  price INTEGER,
  timestamp TEXT
);

CREATE TABLE holdings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  ticker TEXT,
  qty TEXT
);