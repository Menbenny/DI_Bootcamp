//! CANNOT require FROM client - hence - FETCH

document.addEventListener('DOMContentLoaded', () => {
    getRandom();
});

function getRandom() {
    fetch('http://localhost:3001/emojis')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        randomEmoji = data.randomEmoji;
        let options = data.shuffleEmojis;
        render(randomEmoji, options);
    })
    .catch(e => {
        console.log(e);
    })
}

getRandom();

function render(emoji, options) {
    const html = options.map(item=>{
        return `${item.name}`
    })
    document.getElementById('root').innerHTML = "options:" + html.join(' ') + "hint:" + emoji.emoji;
}

function guessEmoji (){
    const guess = document.getElementById('guess').value;
    const name = randomEmoji.name;

    fetch('http://localhost:3001/emojis', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({name, guess}),
    });
    
    .then(res => res.json())
    .then(data => {
        if(data.code === 'ok'){
            document.getElementById('msg').innerHTML = `
            <h2>${data.message}</h2>
            <h6>${data.score}</h6>
            `;
            getRandom()
        } else {
            document.getElementById('msg').innerHTML = `
            <h2>${data.message}</h2>
            
            `;
        }
    })
    .catch(error => console.log(error))
}