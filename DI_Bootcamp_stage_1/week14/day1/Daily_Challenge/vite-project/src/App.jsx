import { useState } from 'react'

import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    {name: 'Php  ', votes: 0},
    {name: 'Python  ', votes: 0},
    {name: 'JavaScript_Vanilla  ', votes: 0},
    {name: 'Java  ', votes: 0}
    
  ]);

  const theVote = (i) => {
    languages[i].votes++;
    console.log(languages);
    setLanguages(newLang)
  };

  return (
    <>
      <h2>Vote</h2>
      {languages.map((lang,indx)=> {
        return (
          <div key={lang.name}>
              {lang.votes} {lang.name}
              <button onClick={() => theVote(indx)}>Vote</button>
          </div>
        )
      })}
    </>
  )

}

export default App
