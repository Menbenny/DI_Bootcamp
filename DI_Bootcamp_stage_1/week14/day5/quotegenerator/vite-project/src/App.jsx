import { useState } from 'react'
import { Quotes } from './components/Quotes'
import './App.css'

const getRandomIndex = (arrayLength) => Math.floor(Math.random() * arrayLength);

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6;i++){
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}

const App = () => {
  const [currentQuote, setCurrentQuote] = useState({});
  // const [prevIndex, setPrevIndex] = useState(null);
  // const [bgColor, setPrevIndex] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [buttonColor, setButtonColor] = useState('#000000');

  useEffect(() => {
    generalRandomQuote();
  }, []);

  const generateRandomQuote = () => {
    let index = getRandomIndex(quotes.length);

    while(index === prevIndex) {
      index = getRandomIndex(quotes.length);
    }
    setCurrentQuote(quotes[index]);
    setPrevIndex(index);

    setBgColor(getRandomColor());
    setTextColor(getRandomColor());
    setButtonColor(getRandomColor());
  }

  return (
    <>
       <div
      className="app"
      style={{
        backgroundColor: bgColor,
        transition: 'background-color 0.5s ease',
      }}
    > 
      <div className="quote-box" style={{ color: textColor }}>
        <h1 className="quote">"{currentQuote.quote}"</h1>
        {currentQuote.author && (
          <p className="author">- {currentQuote.author}</p>
        )}
        <button
          className="new-quote-button"
          style={{
            backgroundColor: buttonColor,
            transition: 'background-color 0.5s ease',
          }}
          onClick={generateRandomQuote}
        >
          New Quote
        </button>
      </div>
    </div>
    </>
  );
};

export default App;
