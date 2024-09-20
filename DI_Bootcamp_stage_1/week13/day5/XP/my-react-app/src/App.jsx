import { useState } from 'react'
import './App.css'

function App() {
  const myElemet = <h1>I love JSX!</h1>
  const sum = 5+5;

  return (
    <>
      <div>
        <p>Hello World</p>
        {myElemet}
        
      </div>
      <p>React is {sum} times faster with Vite</p>
    </>
  )
}

export default App
