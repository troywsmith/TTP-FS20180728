\c stock_portfolio;

DELETE FROM users;

INSERT INTO users (name, email, password_digest, cash) VALUES ('Troy', 'a@aol.com', 'password', 5000);
INSERT INTO users (name, email, password_digest, cash) VALUES ('Jae', 'b@aol.com', 'password', 5000);
INSERT INTO users (name, email, password_digest, cash) VALUES ('Raul', 'c@aol.com', 'password', 5000);

INSERT INTO holdings (email, ticker, qty) VALUES ('a@aol.com', 'AAPL', 48);
INSERT INTO holdings (email, ticker, qty) VALUES ('a@aol.com', 'FB', 68);
INSERT INTO holdings (email, ticker, qty) VALUES ('a@aol.com', 'TWTR', 234);
INSERT INTO holdings (email, ticker, qty) VALUES ('a@aol.com', 'SNAP', 3423);

INSERT INTO holdings (email, ticker, qty) VALUES ('b@aol.com', 'AAPL', 48);
INSERT INTO holdings (email, ticker, qty) VALUES ('b@aol.com', 'FB', 68);
INSERT INTO holdings (email, ticker, qty) VALUES ('b@aol.com', 'TWTR', 234);
INSERT INTO holdings (email, ticker, qty) VALUES ('b@aol.com', 'SNAP', 3423);

INSERT INTO holdings (email, ticker, qty) VALUES ('c@aol.com', 'AAPL', 48);
INSERT INTO holdings (email, ticker, qty) VALUES ('c@aol.com', 'FB', 68);
INSERT INTO holdings (email, ticker, qty) VALUES ('c@aol.com', 'TWTR', 234);
INSERT INTO holdings (email, ticker, qty) VALUES ('c@aol.com', 'SNAP', 3423);