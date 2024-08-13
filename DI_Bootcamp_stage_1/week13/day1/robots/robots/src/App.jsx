// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import users from './users.json';
import User from './users';

function App() {
  

  return (
  
      <div>
        <h2>Robots</h2>
        {users.map((item)=>{
          return <User key={item.id} info={item}/>
        })}
      </div>
    
   
  )
}

export default App
