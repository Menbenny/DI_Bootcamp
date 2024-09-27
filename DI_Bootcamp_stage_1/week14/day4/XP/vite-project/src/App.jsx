import { useState } from 'react'
import './App.css'
import ErrorBoundary from './component/ErrorBoundary'
import BuggyCounter from './component/buggyCounter'
import LifecycleDemo from './component/LifecycleDemo'

const App = () => {
  const [simulation, setSimulation] = useState('1');

  const handleSimulationChange = (e) => {
    setSimulation(e.target.value);
  };

  const renderSimulation = () => {
    switch (simulation) {
      case '1':
        return (
          <div>
            <h2>Simulation 1: One ErrorBoundary wrapping two BuggyCounters</h2>
            <ErrorBoundary>
              <BuggyCounter />
              <BuggyCounter />
            </ErrorBoundary>
          </div>
        );
      case '2':
        return (
          <div>
            <h2>Simluation 2 : Each BuggyCounter has its own ErrorBoundary</h2>
            <ErrorBoundary>
              <BuggyCounter />
            </ErrorBoundary>
            <ErrorBoundary>
              <BuggyCounter />
            </ErrorBoundary>
          </div>
        );
      case '3':
        return (
          <div>
            <h2>Simulation 3: BuggyCounter without ErrorBoundary</h2>
            <BuggyCounter />
          </div>
        );
      case '4':
        return <LifecycleDemo/>
    }
  }
}

export default App
