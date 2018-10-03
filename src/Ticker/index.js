import React, { Component } from "react";
import "../style.css";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        data: null,
    }
  }

  componentDidMount () {
      return fetch(`https://ws-api.iextrading.com/1.0/stock/${this.props.ticker}/quote`)
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
        <li>
          LOADING...
        </li>
      )
    } else {
      return (
        <li className="portfolio-li">
          <div className="left">
            <p> {this.state.data.symbol} </p>
          </div>
          <div className="left">
            <p> {this.props.qty} Shares </p>
          </div>
          <div className="right">
            <p> {this.state.data.latestPrice} </p>
          </div>
        </li>
      )
    }
  }
}

export default Stock;