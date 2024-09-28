import { useState } from 'react';
import LanguageList from './components/LanguageList';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "PHP", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // Function to handle voting
  const handleVote = (languageName) => {
    const updatedLanguages = languages.map((language) => {
      if (language.name === languageName) {
        return { ...language, votes: language.votes + 1 };
      }
      return language;
    });
    setLanguages(updatedLanguages);
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite Programming Language</h1>
      <LanguageList languages={languages} onVote={handleVote} />
    </div>
  );
}

export default App;
