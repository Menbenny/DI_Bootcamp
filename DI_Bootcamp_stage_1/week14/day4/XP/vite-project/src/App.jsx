import { useState } from 'react'
import './App.css'
import ErrorBoundary from './ErrorBoundary'

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0}
  }

  handleClick = () => {
    this,setState(({ counter }) => ({
      counter: counter + 1
    }))
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!')
    }
    return (
      <h1 onClick={this.handleClick}>
        {this.state.counter}
      </h1>
    );
  }
}

class App extends

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
