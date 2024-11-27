import React, { Component } from "react";

class App extends Component {
  state = { 
    message : "",
    inputValue: "",
    serverResponse: "",
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/api/hello");
    const message = await response.text();
    this.setState({ message });
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value })
  };

  handleSubmit = async (event)=> {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: this.state.inputValue })
    });

    const result = await response.json();
    this.setState({ serverResponse: result.message })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.handleInputChange}
            placeholder="Type something"
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.serverResponse}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
