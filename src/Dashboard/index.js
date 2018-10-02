import React, { Component } from "react";
import "../style.css";

// Components
import BuySell from "../BuySell";
import Portfolio from "../Portfolio";

class Dashboard extends Component {

  render() {

    return (
      <div className="Component">
        <Portfolio />
        <BuySell />
      </div>
    );
  }
}

export default Dashboard;
