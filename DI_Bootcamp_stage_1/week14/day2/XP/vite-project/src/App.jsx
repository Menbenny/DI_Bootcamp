import { useState } from 'react'
import Car from './components/car'
import './App.css'

const carinfo = {name: "Ford", model: "Mustang"}

function App() {
  

  return (
    <>
      <div>
        <Car carInfo={carinfo}/>
      </div>
    </>
  )
}

export default App
