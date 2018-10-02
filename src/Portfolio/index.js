import React, { Component } from "react";
import "../style.css";

class Portfolio extends Component {

  render() {

    return (
      <div>
        <h2 className="header"> Your Portfolio </h2>
        <ul class="transactionlist">
          <hr />
            <li>
              <div class="left">
                <p>AAPL</p>
              </div>
              <div class="middle">
                <p> 18 Shares </p>
              </div>
              <div class="right">
                <p> @ 300.00</p>
              </div>
            </li>
            <hr />
            <li>
              <div class="left">
                <p>STWD</p>
              </div>
              <div class="middle">
                <p> 48 Shares </p>
              </div>
              <div class="right">
                <p> @ 20.56 </p>
              </div>
            </li>
            <hr />
        </ul>  
      </div>
    );
  }
}

export default Portfolio;
