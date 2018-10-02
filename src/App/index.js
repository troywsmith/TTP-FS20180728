import React, { Component } from "react";
import "../style.css";

// Components
import Main from '../Main'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // api: [],
      name: "",
      email: "",
      password: "",
      showLogin: false,
      showMain: true,
      // created: false
    };
    // this.onFormChange = this.onFormChange.bind(this);
    // this.onLoginClick = this.onLoginClick.bind(this);
    // this.onRegisterClick = this.onRegisterClick.bind(this);
  }

  render() {
    return (
    
    <div className="App">
      {this.state.showLogin ? (
        <div style={{ marginTop: 50 + "px" }}>
          <form onChange={this.onFormChange}>
            <div>
              <input
                type="text"
                name="name"
                value={this.state.name}
                placeholder="name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={this.state.email}
                placeholder="email"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="password"
              />
            </div>
            <input
              className="button"
              type="submit"
              value="Login"
              onClick={this.onLoginClick}
            />
            <input
              className="button"
              type="button"
              value="Register"
              onClick={this.onRegisterClick}
            />
          </form>
        </div>
      ) : null}
      {this.state.showMain ? (
        <Main
          name={this.state.name}
          email={this.state.email}
        />
      ) : null}
    </div>
  
    )
  }
}

export default App;