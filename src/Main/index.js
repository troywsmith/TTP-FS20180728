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
      
    };
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
                user={this.props.user}
              />
            </Tab>
            <Tab eventKey={2} title="Transactions" className="tab">
              <Transactions 
                user={this.props.user}
              />
            </Tab>
          </Tabs>
      </div>
    )
  }
}

export default Main;