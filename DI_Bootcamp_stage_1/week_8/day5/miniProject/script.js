let quotes = [
    {
        id: 0,
        author: '- Oscar',
        quote: 'To live is the rarest thing in the world. Most people exist, that is all'
    },
    {
        id: 1,
        author: '- Emily Dickinson',
        quote: 'That it will never come again is what makes life so sweet.'
    },
    {
        id: 2,
        author: '- George Eliot',
        quote: 'It is never too late to be what you might have been.' 
    },
    {
        id: 3,
        author: '- Ralph Waldo Emerson',
        quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.' 
    },
    {
        id: 4,
        author: '- Haruki Murakami',
        quote: 'Pain is inevitable. Suffering is optional.' 
    }
]

let lastQuoteIndex = -1

function generateQuote() {
  

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);

    lastQuoteIndex = randomIndex;
    return document.querySelector('button').addEventListener('click',() => {
        const quoteSection = document.getElementById('quote-section');
        const randomQuote = generateQuote();
        quoteSection.innerHTML =  `<p>"${quotes[randomIndex].quote}"</p><p><em>- ${quotes[randomIndex].author}</em></p>`;
    })    
}

document.getElementById('addQuoteForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newQuoteText = document.getElementById('newQuote').value;
    const newAuthorText = document.getElementById('newAuthor').value;
    const newId = quotes.length;
    const newQuote = {id: newId, author: newAuthorText, quote:newQuoteText};
    quotes.push(newQuote);
    document.getElementById('newQuote').value = '';
    document.getElementById('newAuthor').value = '';
});


    



