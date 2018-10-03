import React, { Component } from "react";
import "../style.css";

class Portfolio extends Component {

  render() {

    return (
      <div className="section">
        <h2 className="header"> Your Portfolio </h2>
        <hr />
        <ul className="transactionlist">
            <li>
              <div className="left">
                <p>AAPL</p>
              </div>
              <div className="middle">
                <p> 18 Shares </p>
              </div>
              <div className="right">
                <p> @ 300.00</p>
              </div>
            </li>
            <li>
              <div className="left">
                <p>STWD</p>
              </div>
              <div className="middle">
                <p> 48 Shares </p>
              </div>
              <div className="right">
                <p> @ 20.56 </p>
              </div>
            </li>
        </ul>  
      </div>
    );
  }
}

export default Portfolio;
