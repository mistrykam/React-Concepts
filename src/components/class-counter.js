import "../App.css";
import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      name: ""
    };
  }

  componentDidMount() {
    // mounted
    document.title = `Initial counter is ${this.state.counter}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      document.title = `The counter is ${this.state.counter}`;
    }
  }

  incrementCount = () => {
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <p>Class Counter</p>
        <h3>{this.state.counter}</h3>
        <button onClick={this.incrementCount}>Increment Counter</button>
        <div>
          <input type="type" name="name" onChange={(event) => this.handleChange(event)}></input>
          <h3>Name: {this.state.name}</h3>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
