import React, { Component } from "react";
import "../style.css";

// Components
// import BuySell from "../BuySell";
// import Portfolio from "../Portfolio";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        data: null,
    }
  }

  componentDidMount () {
      return fetch('https://ws-api.iextrading.com/1.0/stock/aapl/quote')
          .then ( (response) => response.json() )
          .then( (responseJson) => {
              this.setState({
                  isLoading: false,
                  data: responseJson,
              })
          })
      .catch((error) => {
          console.log(error)
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
      <div className="dashboard">

        <div className="section portfolio">
          <h3>Your Portfolio</h3>
          <hr />
          <ul>
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
          <hr />
          <p> Total Balance = $5943.34 </p>
        </div>

        <div className="section exchange">
          <h3>Cash - $5000.00 </h3>
          <hr />
          <form action="/newtransaction" method="POST" className="exchangeform">
            <input id="ticker" type="text" list="datalist" name="ticker" placeholder="  Ticker" />
            <datalist id="datalist">

            </datalist>
            <input id="quantity" type="number" name="quantity" placeholder="  QTY" />
            <button type="submit">Buy</button>
            <button type="submit">Sell</button>
          </form>
        </div>

      </div>
      )
    } else {
      return (
        <div className="dashboard">
  
          <div className="section portfolio">
            <h3>Your Portfolio</h3>
            <hr />
            <ul>
              <li>
                <div className="left">
                  <p>{this.state.data.Symbol}</p>
                </div>
                <div className="middle">
                  <p> 48 Shares </p>
                </div>
                <div className="right">
                  <p> @ {this.state.data.latestPrice} </p>
                </div>
              </li>
            </ul> 
            <hr />
            <p> Total Balance = $5943.34 </p>
          </div>
  
          <div className="section exchange">
            <h3>Cash - $5000.00 </h3>
            <hr />
            <form action="/newtransaction" method="POST" className="exchangeform">
              <input id="ticker" type="text" list="datalist" name="ticker" placeholder="  Ticker" />
              <datalist id="datalist">
  
              </datalist>
              <input id="quantity" type="number" name="quantity" placeholder="  QTY" />
              <button type="submit">Buy</button>
              <button type="submit">Sell</button>
            </form>
          </div>
  
        </div>
      );
    }
  }
}

export default Dashboard;
