import React, { Component } from "react";
import "../style.css";

// Components
import Main from '../Main'

// Bootstrap Components
import { Modal, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      name: "",
      email: "",
      password: "",
      showAuth: true,
      showLogin: false,
      showRegister: false,
      showMain: false,
      created: false,
    };
    this.handleShowLogin = this.handleShowLogin.bind(this);
    this.handleShowRegister = this.handleShowRegister.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.handleCloseRegister = this.handleCloseRegister.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
  }

  onFormChange(evt) {
    const element = evt.target;
    const elementname = element.name; 

    let name = "";
    let email = "";
    let password = "";

    if (elementname === "name") {
      name = element.value;
      this.setState({ name: name });
    } else if (elementname === "email") {
      email = element.value;
      this.setState({ email: email });
    } else if (elementname === "password") {
      password = element.value;
      this.setState({ password: password });
    }

  }

  // When a user clicks login
  onLoginClick(evt) {
    evt.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    fetch("/login.json", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
    .then(user => {
      this.setState({
        showAuth: false,          
        showMain: true
      })
    })
    // this.setState({
    //   name: "",
    //   email: "",
    //   password: ""
    // })
  }


  // When a user registers
  onRegisterClick(evt) {
    console.log("register successfully clicked");
    evt.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    // this.setState({
    //   username: '',
    //   password: ''
    // });
    fetch("/register.json", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
      // .then(response => response.json())
      .then(user => {
        this.setState({
          created: true,
          showAuth: false,
          showMain: true
        });
      });
  }

  handleShowLogin() {
    this.setState({ showLogin: true });
  }

  handleCloseLogin() {
    this.setState({ showLogin: false });
  }

  handleShowRegister() {
    this.setState({ showRegister: true });
  }

  handleCloseRegister() {
    this.setState({ showRegister: false });
  }
  

  render() {
    return (
    
    <div className="App">
      <div className="header">
        <p className="logo">stockbase</p>
      </div>
      {this.state.showAuth ? (
      <div className="auth-div">
        <h3> Welcome to Stockbase </h3>
        <Button variant="Register" onClick={this.handleShowRegister}>
            Sign Up
        </Button>
        <Modal show={this.state.showRegister} onHide={this.handleCloseRegister}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
            </form>
          </Modal.Body>
          <Modal.Footer>
              <input
                className="button"
                type="button"
                value="Register"
                onClick={this.onRegisterClick}
              />
          </Modal.Footer>
        </Modal>


        <Button variant="LogIn" onClick={this.handleShowLogin}>
            Log in
        </Button>
        <Modal show={this.state.showLogin} onHide={this.handleCloseLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onChange={this.onFormChange}>
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
            </form>
          </Modal.Body>
          <Modal.Footer>
              <input
                className="button"
                type="submit"
                value="Login"
                onClick={this.onLoginClick}
              />
          </Modal.Footer>
        </Modal>

      </div>
      ) : null }

      {this.state.showMain ? (
        <Main
          email={this.state.email}
        />
      ) : null }

    </div>
  
    )
  }
}

export default App;