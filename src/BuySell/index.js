import React, { Component } from "react";
import "../style.css";

class BuySell extends Component {

  render() {

    return (
      <div className="Component">
        
        <div class="exchange">
          <form action="/newtransaction" method="POST" class="paymentform">
            <h3 id="exchange">Buy/Sell a Stock</h3>
            <input id="usernamepayment" type="text" list="datalist" name="selectedusername" placeholder="  Ticker" />
            <datalist id="datalist">

            </datalist>
            <input id="amount" type="number" name="amount" placeholder="  amount" />
            <button type="submit">Buy/Sell</button>
          </form>
        </div>

      </div>
    );
  }
}

export default BuySell;
