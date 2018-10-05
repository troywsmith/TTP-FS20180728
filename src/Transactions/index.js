import React, { Component } from "react";
import "../style.css";

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }
  
  componentDidMount() {
    fetch("/.json")
      .then(response => response.json())
      .then(data => 
        data.transactions.forEach( (transaction) => {
          console.log(transaction.email, this.props.email)
          if (transaction.email === this.props.email) {
            console.log("TRANSACTION: ", transaction)
            this.setState(prevState => ({
              transactions: [...prevState.transactions, transaction]
            }))
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
            {this.state.transactions.map( transaction => {
              return (
                <li className="transaction-li" key={transaction.id}>
                  <div className="left">
                    <p>{transaction.timestamp} </p>
                  </div>
                  <div className="middle">
                    <p> {transaction.type} {transaction.ticker} {transaction.qty} Shares @ ${transaction.price} </p>
                  </div>
                  <div className="right">
                    <p> ${transaction.total} </p>
                  </div>
                  <hr />
                </li>
              )
            })}
        </ul>   
      </div>
    );
  }
}

export default Transactions;