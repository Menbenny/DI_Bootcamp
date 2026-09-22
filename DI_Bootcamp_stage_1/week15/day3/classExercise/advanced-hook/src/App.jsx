import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState('text is going to be changed');

  return (
    <>
    <h1>Class Exercise - Props</h1>
    <p><em>I personally have no idea what props are</em></p>
    </>
  )
}

export default App
