import { useState } from 'react'
import Button from './Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const testingVariable = "Changed"; 
  

  const firstFunc = () => {
    console.log('first func with Nadav');
    alert('this is alert');
    
  }

  const secondFunc = () => {
    const answer = prompt('What does this do? ')

    alert(answer)
  }

  return (
    <div>
      <Button text="Dynamic_text" testVal={testingVariable} color="red" buttonFunc={firstFunc}/>
      <Button text="Text is dynamic" color="blue" buttonFunc={secondFunc}/>
    </div>
  )

  

}

export default App
