import { useState } from 'react'
import Car from './components/car'
import Phone from './components/phone'
import './App.css'

const carinfo = {name: "Ford", model: "Mustang"}

function App() {
  

  return (
    <>
      <div>
        <h1>Here</h1>
        <Car carInfo={carinfo}/>
        <Phone phoneInfo={phoneInfo}/>
      </div>
    </>
  )
}

export default App
