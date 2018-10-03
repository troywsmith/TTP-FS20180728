## TTP Fullstack Application Build

### Overview

For this assessment, you’ll need to implement a web based stock portfolio app. For the purpose of this exercise a stock is simply an asset that can be bought or sold (like a house) at a price that continuously rises and falls throughout the day. Up to date pricing information is available for free via the IEX API. A guide to the UI can be observed below. Your implementation doesn’t need to be an exact match but should implement all of the listed user stories. In addition to the user stories, your submission will be assessed for readability, code organization, commit history clarity, overall UI/UX, and overall API design.

### Design & Style Guide

![Regiser](../images/Register.png?)
![Sign In](../images/SignIn.png?raw=true "Sign In")
![Portfolio](../images/Portfolio.png?raw=true "Portfolio")
![Transactions](../images/Transactions.png?raw=true "Transactions")


### User Stories

1. As a user I want to create a new account with my name, email, and password so that I can buy and trade stocks.
- Default the user’s cash account balance to $5000.00 USD.
- A user can only register once with any given email.

2. As a user I want to authenticate via email and password so that I can access my account.

3. As a user I want to buy shares of stock at its current price by specifying its ticker symbol and number of shares so that I can invest.
- A user can only buy whole number quantities of shares.
- A user can only buy shares if they have enough cash in their account for a given purchase.
- A user can only buy shares if the ticker symbol is valid.

4. As a user I want to view a list of all transactions I’ve made to date (trades) so that I can perform an audit.

5. As a user I want to view a list of all the stocks I own along with their current
values so that I can review performance.
- Current values should be based on the latest price and quantity owned for a given stock.

6. As a user I’d like to see the font color of stock symbols and current prices in my portfolio change dynamically to indicate performance.
- Display red when the current price is less than the day’s open price.
- Display grey when the current price is equal to the day’s open price.
- Display green when the current price is greater than the day’s open price.