import React, { Component } from "react";
import "../style.css";

// Components
import Ticker from "../Ticker";
import PriceFinder from "../PriceFinder";
import CalculateTotal from "../Calculatetotal";

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
    };
    this.onClick = this.onClick.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this)
  }

  fetchAPI() {
    return fetch("/.json")
    .then(response => response.json())
  }

  fetchPrice(ticker) {
    return fetch(`https://ws-api.iextrading.com/1.0/stock/${ticker}/quote`)
      .then ( (response) => response.json() )
      .then( (responseJson) => {
        this.setState({ 
          price: responseJson.latestPrice
        })    
      })
      .catch((error) => {
          console.log(error)
      });
  }

  calculateTotal(price, qty) {
    return this.setState({ total: price * qty })
  }

  componentDidMount() {
    this.fetchAPI()
    .then(data => 
      data.holdings.forEach( (holding) => {
        if (holding.email === this.props.email) {
          console.log("holding: ", holding)
          this.setState(prevState => ({
            holdings: [...prevState.holdings, holding]
          }))
        }
      })
    )
    .then(this.setState({isLoading: false}))
    .catch(err => {console.log(err);});
  }

  onFormChange(evt) {
    const element = evt.target;
    const elementname = element.name; 

    console.log(elementname, element.value)

    let ticker = "";
    let qty = "";
    let type = "";

    if (elementname === "ticker") {

      ticker = element.value;
      this.setState({ ticker: ticker });
      this.fetchPrice(ticker)

    } else if (elementname === "qty") {

      qty = element.value;
      this.setState({ qty: qty });
      this.calculateTotal(qty, this.state.price)

    } else if (elementname === "type") {

      type = element.value;
      this.setState({ type: type})

    }

  }

  // When a user clicks login
  onClick(evt) {
    evt.preventDefault();
    const transactionData = {
      email: this.props.email,
      ticker: this.state.ticker,
      price: this.state.price,
      qty: this.state.qty,
      total: this.state.total,
      type: this.state.type,
    };
    fetch("/new_transaction.json", {
      method: "POST",
      body: JSON.stringify(transactionData),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
    this.setState({
      ticker: "",
      price: 0,
      qty: 0,
      total: 0
    })
  }

  // getPrice() {
  //   return fetch(`https://ws-api.iextrading.com/1.0/stock/${this.state.ticker}/quote`)
  //   .then ( (response) => response.json() )
  //   .then( (responseJson) => {
  //     this.setState({ 
  //       price: responseJson.latestPrice,
  //     })    
  //   })
  //   .catch((error) => {console.log(error)});
  // }

  // calculateTotal() {
  //   this.setState({ 
  //     total: this.state.price * this.state.qty
  //   })   
  //   // console.log("ticker: ", this.state.ticker)
  //   // console.log("qty: ", this.state.qty)
  //   // console.log("price: ", this.state.price)
  //   // console.log("total: ", this.state.total)
  // }
  

  render() {

      return (
        <div className="dashboard">

          <h2>Welcome to your dashboard, {this.props.name}</h2>

          {this.state.isLoading ? null : 
          
          <div className="dashboard-content">
            
            <div className="section portfolio">
              <h3>Your Portfolio</h3>
              <hr />
              <ul>
                {this.state.holdings ?
                  this.state.holdings.map( (holding, key) => {
                  return (
                    <Ticker 
                      key={key}
                      ticker={holding.ticker}
                      qty={holding.qty}
                    />
                  )
                  }) : null
                  }
                  
              </ul> 
              <hr />
              <p> Total Balance = $5943.34 </p>
            </div>

            <div className="section exchange">
              <h3>Cash - ${this.props.cash} </h3>
              <hr />
              
              <form onChange={this.onFormChange}>
                <div>
                  <input
                    type="text"
                    name="ticker"
                    value={this.state.ticker}
                    placeholder="ticker"
                  />
                </div>

                <div>
                  <p> Price: {this.state.price} </p>
                </div>

                <div>
                  <input
                    type="number"
                    name="qty"
                    value={this.state.qty}
                    placeholder="qty"
                  />
                </div>

                <div>
                  <p> Total: {this.state.total} </p>
                </div>
                
                <div>
                  <select name="type">
                    <option value="Buy/Sell">Buy/Sell</option>
                    <option value="Buy">Buy</option>
                    <option value="Sell">Sell</option>
                  </select>
                </div>
   
                <input
                  className="button"
                  type="button"
                  value="Submit"
                  onClick={this.onClick}
                />
              </form>

            </div>

          </div>

          }

        </div>
      );

  }
}

export default Dashboard;


