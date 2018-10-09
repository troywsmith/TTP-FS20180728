import React, { Component } from "react";
import "../style.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      toggleFormChange: false,
      user: {},
      holdings: [],
      ticker: "",
      price: 0,
      qty: 0,
      total: 0,
      type: "",
      balance: 0
    };
    this.fetchAPI = this.fetchAPI.bind(this)
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI() {
    return fetch("/.json")
    .then(response => response.json())
    .then(data => 
      data.holdings.forEach( (holding) => {
        if (holding.email === this.props.email) {
          console.log("holding: ", holding)
          this.fetchPrice(holding)
        }
      })
    )
    .catch((error) => {
      console.log(error)
  });
  }

  fetchPrice(holding) {
    // return fetch(`https://ws-api.iextrading.com/1.0/stock/${holding}/quote`)
    return fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${holding.ticker}&types=quote`)
      .then ( (response) => response.json() )
      .then( (responseJson) => {
        this.setState(prevState => ({ 
          balance: prevState.balance + responseJson[Object.keys(responseJson)[0]].quote.latestPrice * holding.qty
        }))   
      })
      .catch((error) => {
          console.log(error)
      });
  }

  render() {
      return (
        <div className="dashboard">
          <p> Portfolio Balance = {this.state.balance} </p>  
          <p> Cash Balance = {this.props.cash} </p>  
          <p> Total Balance = {this.state.balance + this.props.cash} </p>  
        </div>
      );

  }
}

export default Dashboard;