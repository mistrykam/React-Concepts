import React, { Component } from "react";

export class IntervalClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  tick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  componentDidMount() {
    this.internal = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.internal);
  }

  render() {
    return (
      <div className="container">
        <h3>
          Counter <span style={{ color: "red" }}>{this.state.counter}</span>
        </h3>
      </div>
    );
  }
}

export default IntervalClass;
