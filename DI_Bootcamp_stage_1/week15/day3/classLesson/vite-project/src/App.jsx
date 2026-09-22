import { useState } from 'react'
import Counter from './counter'
import './App.css'

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>The createContext, useContext Hook</h2>
    </>
  )
}

export default App
