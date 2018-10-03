import React, { Component } from "react";
import "../style.css";

// Components
import Dashboard from '../Dashboard';
import Transactions from '../Transactions';

// Bootstrap Components
import { Tabs, Tab } from 'react-bootstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    fetch("/.json")
      .then(response => response.json())
      .then(data => 
        data.user.forEach( (user) => {
          if (user.email === this.props.email) {
            this.setState({ user: user })
          }
        })
      )
      .catch(err => {
        console.log(err);
      });
  }


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
                name={this.state.user.name}
                email={this.state.user.email}
                cash={this.state.user.cash}
              />
            </Tab>
            <Tab eventKey={2} title="Transactions" className="tab">
              <Transactions 
                name={this.state.user.name}
                email={this.state.user.email}
                cash={this.state.user.cash}            
              />
            </Tab>
          </Tabs>
      </div>
    )
  }
}

export default Main;