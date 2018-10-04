import React, { Component } from "react";
import "../style.css";

class PriceFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        price: null,
    }
  }

  componentDidMount () {
    console.log(this.props.ticker)
    return fetch(`https://ws-api.iextrading.com/1.0/stock/${this.props.ticker}/quote`)
      .then ( (response) => response.json() )
      .then( (responseJson) => {
        this.setState({ 
          isLoading: false,
          price: responseJson.latestPrice
        })    
      })
      .catch((error) => {
          console.log(error)
      });
  }


  render() {
    if (this.state.isLoading) {
      return (
        <p>
          LOADING...
        </p>
      )
    } else {
      return (
        <p> {this.state.price} </p>
      )
    }
  }
}

export default PriceFinder;