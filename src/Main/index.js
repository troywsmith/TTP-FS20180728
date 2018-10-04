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
      isLoading: true,
      user: {},
      holdings: [],
    };
  }

  componentDidMount() {
    fetch("/.json")
      .then(response => response.json())
      .then(data => 
        data.users.forEach( (user) => {
          if (user.email === this.props.email) {
            console.log('Main User: ', user)
            this.setState({ user: user })
          }
        })
      )
      .then(this.setState({isLoading: false}))
      .catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="Component">
          {this.state.isLoading ? null : 
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
          }
      </div>
    )
  }
}

export default Main;