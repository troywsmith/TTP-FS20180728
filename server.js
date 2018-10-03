const express = require('express');
const session = require("express-session");
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const bcrypt = require('bcrypt');
saltRounds = 10;

// Create a new Express application (web server)
const app = express();

// API for our database models
const User = require('./models/User');
const Holding = require('./models/Holding');
const Transaction = require('./models/Transaction');

// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;

// ALL APP.USE
// Needed for Heroku
app.use("/", express.static("./build/"));
app.use(jsonParser);

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
  })
);

// All data
app.get('/.json', (request, response) => {
  Promise.all([
    User.all(),
    Holding.all(),
    Transaction.all()
  ])
  .then(([users, holdings, transactions]) => {
    console.log(`about to render api for user`)
    response.json({
      users: users,
      holdings: holdings,
      transactions: transactions
    });
  });
});

// Register
app.post("/register.json", (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  const password = request.body.password;
  bcrypt
    .hash(password, saltRounds)
    .then(hash => {
      const newUser = {
        name: name,
        email: email,
        password_digest: hash,
      };
      User.create(newUser);
    })
    .then(user => {
      request.session.loggedIn = true;
      request.session.userId = user.id;
    })
    .then(user => {
      response.json(user);
    });
});

// Login
app.post("/login.json", (request, response) => {
  console.log(request)
  const email = request.body.email;
  const password = request.body.password;
  User.findByEmail(email)
    .then(user => {
      console.log(user)
      return bcrypt
        .compare(password, user.password_digest)
        .then(isPasswordCorrect => {
          if (isPasswordCorrect) {
            request.session.loggedIn = true;
            request.session.userId = user.id;
            // console.log(request.session)
            return response.redirect(301, "/");
          } else {
            console.log('error')
          }
        })
    });
});

// Create Transaction
app.post('/new_transaction.json', (request, response) => {
  // console.log(request)
  const newTransaction = {
    email: request.body.email,
    type: request.body.type,
    ticker: request.body.ticker,
    qty: request.body.qty,
    price: request.body.price,
    timestemp: 'Placeholder'
  };
  console.log('create transaction:', newTransaction)
  Transaction.create(newTransaction)
    .then(transaction => {
      response.json(transaction);
    });
});

// Start the web server listening on the provided port.
const server = app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});

// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
if (process.env.NODE_ENV == "production") {
  app.get("/*", function (request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}