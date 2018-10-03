import React, { Component } from "react";
import "../style.css";

class Transactions extends Component {
  constructor(props) {
    super(props);

  }
  
  componentDidMount() {
    fetch("/.json")
      .then(response => response.json())
      .then(data => 
        data.transactions.forEach( (transaction) => {
          console.log(transaction)
          if (transaction.email === this.props.email) {
            this.setState({ transactions: this.state.transactions.append(transaction) })
          }
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  render() {

    return (
      <div className="section transactions">
        <h2>
          Transactions
        </h2>
        <ul className="transactionlist">
          <hr />
            <li>
              <div className="left">
                <p>BUY (AAPL)</p>
              </div>
              <div className="middle">
                <p> 6 Shares </p>
              </div>
              <div className="right">
                <p> @ 300.00</p>
              </div>
            </li>
            <hr />
            <li>
              <div className="left">
                <p>BUY (STWD)</p>
              </div>
              <div className="middle">
                <p> 40 Shares </p>
              </div>
              <div className="right">
                <p> @ 20.56 </p>
              </div>
            </li>
            <hr />
            <li>
              <div className="left">
                <p>BUY (AAPL)</p>
              </div>
              <div className="middle">
                <p> 6 Shares </p>
              </div>
              <div className="right">
                <p> @ 300.00</p>
              </div>
            </li>
            <hr />
            <li>
              <div className="left">
                <p>BUY (STWD)</p>
              </div>
              <div className="middle">
                <p> 40 Shares </p>
              </div>
              <div className="right">
                <p> @ 20.56 </p>
              </div>
            </li>
            <hr />
            <li>
              <div className="left">
                <p>BUY (AAPL)</p>
              </div>
              <div className="middle">
                <p> 6 Shares </p>
              </div>
              <div className="right">
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