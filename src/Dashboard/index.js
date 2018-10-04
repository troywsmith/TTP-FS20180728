import React, { Component } from "react";
import "../style.css";

// Components
import Ticker from "../Ticker";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: {},
      holdings: [],
      ticker: "",
      qty: 0,
      price: 0,
      type: "",
    };
    this.onFormChange = this.onFormChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }


  componentDidMount() {
    fetch("/.json")
      .then(response => response.json())
      .then(data => 
        data.holdings.forEach( (holding) => {
          if (holding.email === this.props.email) {
            console.log(holding.email, this.props.email)
            this.setState({ holding: holding })
          }
        })
      )
      .then(this.setState({isLoading: false}))
      .catch(err => {
        console.log(err);
      });
  }

  onFormChange(evt) {
    const element = evt.target;
    const elementname = element.name; 

    console.log(elementname, element.value)

    let ticker = "";
    let qty = "";
    let price = "";
    let type = "";

    if (elementname === "ticker") {
      ticker = element.value;
      this.setState({ ticker: ticker });
    } else if (elementname === "qty") {
      qty = element.value;
      this.setState({ qty: qty });
    } else if (elementname === "price") {
      price = element.value;
      this.setState({ price: price });
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
      type: this.state.type,
      ticker: this.state.ticker,
      qty: this.state.qty,
      price: this.state.price
    };
    fetch("/new_transaction.json", {
      method: "POST",
      body: JSON.stringify(transactionData),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
    // .then(user => {
    //   this.setState({
    //     showAuth: false,          
    //     showMain: true
    //   })
    // })
    // this.setState({
    //   name: "",
    //   email: "",
    //   password: ""
    // })
  }
  

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
                  <input
                    type="number"
                    name="qty"
                    value={this.state.qty}
                    placeholder="qty"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="price"
                    value={this.state.price}
                    placeholder="price"
                  />
                </div>

                <div>
                  <p> {this.state.qty * this.state.price} USD </p>
                </div>

                <select name="type">
                  <option value="Buy/Sell">Buy/Sell</option>
                  <option value="Buy">Buy</option>
                  <option value="Sell">Sell</option>
                </select>

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


