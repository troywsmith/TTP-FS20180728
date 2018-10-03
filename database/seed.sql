\c stock_portfolio;

DELETE FROM users;

INSERT INTO users (name, email, password_digest, cash) VALUES ('Troy', 't@smith.com', 'password', 5000);
INSERT INTO users (name, email, password_digest, cash) VALUES ('Jae', 't@smith.com', 'password', 5000);
INSERT INTO users (name, email, password_digest, cash) VALUES ('Raul', 't@smith.com', 'password', 5000);

INSERT INTO holdings (user_id, ticker, qty) VALUES (1, 'AAPL', 48);
INSERT INTO holdings (user_id, ticker, qty) VALUES (1, 'FB', 68);
INSERT INTO holdings (user_id, ticker, qty) VALUES (1, 'TWTR', 234);
INSERT INTO holdings (user_id, ticker, qty) VALUES (1, 'SNAP', 3423);

INSERT INTO holdings (user_id, ticker, qty) VALUES (2, 'AAPL', 48);
INSERT INTO holdings (user_id, ticker, qty) VALUES (2, 'FB', 68);
INSERT INTO holdings (user_id, ticker, qty) VALUES (2, 'TWTR', 234);
INSERT INTO holdings (user_id, ticker, qty) VALUES (2, 'SNAP', 3423);

INSERT INTO holdings (user_id, ticker, qty) VALUES (3, 'AAPL', 48);
INSERT INTO holdings (user_id, ticker, qty) VALUES (3, 'FB', 68);
INSERT INTO holdings (user_id, ticker, qty) VALUES (3, 'TWTR', 234);
INSERT INTO holdings (user_id, ticker, qty) VALUES (3, 'SNAP', 3423);