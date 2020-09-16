import React, { Component } from "react";

export class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };
  }

  logMousePosition = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  componentDidMount() {
    // set the listener once the component has completed mounting
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount() {
    window.removeEventListener("mouseover", this.logMousePosition);
  }

  render() {
    return (
      <div className="container">
        <h3>
          Class Mouse Over ({this.state.x}, {this.state.y})
        </h3>
      </div>
    );
  }
}

export default ClassMouse;
