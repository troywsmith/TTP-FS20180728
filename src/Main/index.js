import React, { Component } from "react";
import "../style.css";

// Bootstrap Components
import { Tabs, Tab } from 'react-bootstrap';

// Components
import Dashboard from '../Dashboard';
import Transactions from '../Transactions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
  }

  componentDidMount() {
    fetch("/.json")
      .then(response => response.json())
      .then(data => 
        data.user.forEach( (user) => {
          if (user.email === this.props.email) {
            this.setState({ user: user.name })
          }
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  // componentDidMount() {
  //   fetch("/user.json", {
  //     method: "POST",
  //     body: JSON.stringify(this.props.email),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-type": "application/json"
  //     }
  //   })  
  //   .then(response => response.json())
  //   .then(user => this.setState({ user }))
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }


  render() {
    return (
      <div className="Component">
        <div className="header">
          <p>stockbase</p>
          <button>Sign out</button>
        </div>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="tabs">
            <Tab eventKey={1} title="Dashboard" className="tab">
              <Dashboard 
                user={this.state.user}
              />
            </Tab>
            <Tab eventKey={2} title="Transactions" className="tab">
              {/* <Transactions 
                userData={this.props.userData}
              /> */}
            </Tab>
          </Tabs>
      </div>
    )
  }
}

export default Main;