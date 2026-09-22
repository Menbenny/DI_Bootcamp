import './App.css'
import Home from './components/Home'
import Phone from './components/phone'
import Shop from './components/Shop'
import Nav from './components/Nav'

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Nav/>
    <Routes>
        <Route path='/' element={<Home title='Dashboard'/>}/>
        <Route path='/home' element={<Home title='Dashboard'/>}/>
        
        <Route path='/phone' element={<Phone/>}/>
        <Route path='/shop' element={ <Shop/> }/>
    </Routes>

        {/* <Home title="Dashboard"/>
        <Phone/>
        <Shop/> */}
    </>
  )
}

export default App
