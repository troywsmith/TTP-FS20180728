import React, { Component } from "react";
import "../style.css";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        data: null,
        class: "grey"
    }
  }

  componentDidMount () {
      // return fetch(`https://ws-api.iextrading.com/1.0/stock/${this.props.ticker}/quote`)
      return fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${this.props.ticker}&types=quote`)
          .then ( (response) => response.json() )
          .then( (responseJson) => {
              // let latest = responseJson.latestPrice
              // let open = responseJson.open
              let latest = responseJson[Object.keys(responseJson)[0]].quote.latestPrice
              let open = responseJson[Object.keys(responseJson)[0]].quote.latestPrice
              if (latest > open) {
                this.setState({ 
                  class: "green",
                  isLoading: false,
                  data: responseJson[Object.keys(responseJson)[0]].quote
                })
              } else if (latest < open) {
                this.setState({ 
                  class: "red",
                  isLoading: false,
                  data: responseJson[Object.keys(responseJson)[0]].quote
                })              
              } else {
                this.setState({ 
                  class: "grey",
                  isLoading: false,
                  data: responseJson[Object.keys(responseJson)[0]].quote
                })              
              }
          })
      .catch((error) => {
          console.log(error)
      });
  }


  render() {
    if (this.state.isLoading) {
      return (
        <li>
          LOADING...
        </li>
      )
    } else {
      return (
        <li className="portfolio-li">
          <div className="left">
            <p className={this.state.class}> {this.props.ticker} </p>
          </div>
          <div className="left">
            <p> {this.props.qty} Shares </p>
          </div>
          <div className="right">
            <p className={this.state.class}> {this.state.data.latestPrice} </p>
          </div>
        </li>
      )
    }
  }
}

export default Stock;