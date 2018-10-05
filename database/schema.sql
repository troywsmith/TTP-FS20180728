DROP DATABASE IF EXISTS stock_portfolio;

CREATE DATABASE stock_portfolio;

\c stock_portfolio;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS holdings;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_digest TEXT NOT NULL,
  cash INTEGER CHECK (cash > -1)
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  email TEXT,
  timestamp TEXT,
  ticker TEXT,
  price INTEGER,
  qty INTEGER CHECK (qty > 0),
  total INTEGER,
  type TEXT NOT NULL
);

CREATE TABLE holdings (
  id SERIAL PRIMARY KEY,
  email TEXT ,
  ticker TEXT,
  qty INTEGER
);