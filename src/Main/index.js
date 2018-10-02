import React, { Component } from "react";
import "../style.css";

// Bootstrap Components
import { Tabs, Tab } from 'react-bootstrap';

// Components
import Dashboard from '../Dashboard';
import Transactions from '../Transactions';

class Main extends Component {

  render() {
    return (
      <div className="Component">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="tabs">
          <Tab eventKey={1} title="Dashboard" className="tab">
            <Dashboard />
          </Tab>
          <Tab eventKey={2} title="Transactions" className="tab">
            <Transactions />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Main;