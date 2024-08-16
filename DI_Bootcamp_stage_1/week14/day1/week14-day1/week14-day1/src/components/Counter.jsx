import React, { Component } from "react";

class Counter extends React.Component {
  constructor() {
    super();
    // this.counter = 0;
    this.state = {
      counter: 0,
    };
    console.log('constructor');
  }

  addOne = () => {
    // this.counter += 1;
    // console.log(this.counter);
    this.setState({counter: this.state.counter + 1})
  };

  minusOne = () => {
    // this.counter -= 1;
    // console.log(this.counter);
    this.setState({counter: this.state.counter - 1})
  };

  render() {
    console.log('render');
    return (
      <>
      <h2>Counter class</h2>
        <button onClick={() => this.addOne()}> + </button>
        Counter: {this.state.counter}
        <button onClick={() => this.minusOne()}> - </button>
      </>
    );
  }
}
export default Counter;
