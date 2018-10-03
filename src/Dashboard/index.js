import React, { Component } from "react";
import "../style.css";

// Components
import Ticker from "../Ticker";

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }


  render() {

      return (
        <div className="dashboard">

          <h2>Welcome to your dashboard, {this.props.name}</h2>
  
          <div className="dashboard-content">
            
            <div className="section portfolio">
              <h3>Your Portfolio</h3>
              <hr />
              <ul>
                {/* {this.state.data.map( (val, key) => {
                  return (
                    <div> */}
                      <Ticker 
                        ticker="AAPL"
                        qty={48}
                      />
                      <Ticker 
                        ticker="FB"
                        qty={68}

                      />
                      <Ticker 
                        ticker="TWTR"
                        qty={234}

                      />
                      <Ticker 
                        ticker="SNAP"
                        qty={3423}

                        />
                    {/* </div>
                  )
                })} */}
              </ul> 
              <hr />
              <p> Total Balance = $5943.34 </p>
            </div>

            <div className="section exchange">
              <h3>Cash - ${this.props.cash} </h3>
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
          
        </div>
      );

  }
}

export default Dashboard;
