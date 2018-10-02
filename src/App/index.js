import React, { Component } from "react";
import "../style.css";

// Components
import Login from '../Login'
import Main from '../Main'

class App extends Component {
  render() {
    return (
    
    <div className="App">
      <Login />
      <Main />
    </div>
  
    )
  }
}

export default App;