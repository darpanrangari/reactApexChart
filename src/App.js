import React, { Component } from "react";
// import Chart from "react-apexcharts";
import PiChart from "./PiChart";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <PiChart />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
