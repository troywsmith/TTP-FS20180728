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
      user: {

      }
    };
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
                user={this.state.name}
              />
            </Tab>
            <Tab eventKey={2} title="Transactions" className="tab">
              <Transactions 
                user={this.state.name}
              />
            </Tab>
          </Tabs>
      </div>
    )
  }
}

export default Main;