import React, { Component } from "react";
import "../style.css";


// Bootstrap Components
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class Transactions extends Component {

  render() {

    return (
      <div class="activityfeed">
        <h2>
          Transactions
        </h2>
        <ul class="transactionlist">
          <hr />
            <li>
              <div class="left">
                <p>BUY (AAPL)</p>
              </div>
              <div class="middle">
                <p> 6 Shares </p>
              </div>
              <div class="right">
                <p> @ 300.00</p>
              </div>
            </li>
            <hr />
            <li>
              <div class="left">
                <p>BUY (STWD)</p>
              </div>
              <div class="middle">
                <p> 40 Shares </p>
              </div>
              <div class="right">
                <p> @ 20.56 </p>
              </div>
            </li>
            <hr />
            <li>
              <div class="left">
                <p>BUY (AAPL)</p>
              </div>
              <div class="middle">
                <p> 6 Shares </p>
              </div>
              <div class="right">
                <p> @ 300.00</p>
              </div>
            </li>
            <hr />
            <li>
              <div class="left">
                <p>BUY (STWD)</p>
              </div>
              <div class="middle">
                <p> 40 Shares </p>
              </div>
              <div class="right">
                <p> @ 20.56 </p>
              </div>
            </li>
            <hr />
            <li>
              <div class="left">
                <p>BUY (AAPL)</p>
              </div>
              <div class="middle">
                <p> 6 Shares </p>
              </div>
              <div class="right">
                <p> @ 300.00</p>
              </div>
            </li>
            <hr />
        </ul>   
      </div>
    );
  }
}

export default Transactions;