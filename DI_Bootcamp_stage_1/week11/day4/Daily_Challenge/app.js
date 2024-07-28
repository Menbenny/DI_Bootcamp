const express = require("express");
const cors = require("cors");
const { emojis } = require('./config/emojis.js');

let score = 0;

const app = express();

app.use(cors());

//BODY Parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//HTML - STATIC FILE ADDITION
app.use('/', express.static(__dirname + '/public'))

app.listen(3001, ()=>{
    console.log(`run on 3001`);
})

app.get("/emojis", (req,res)=>{
    const randomNumber = Math.floor(Math.random() * emojis.length)
    const randomEmoji = emojis[randomNumber]
    res.json(
        {
            randomEmoji,
            shuffleEmojis:shuffleArray(emojis)
        }
    );
});


app.post('/emojis', (req, res)=>{
    // -- Works after body parsing --
    const {name, guess} = req.body;
    if(name === guess){
        score++;
        return res.json({
            message: 'Correct!!1 WOW!!',
            score,
            code: 'OK'
        })
    }
    res.json({
        message: 'Mamash No, try again!',
        code: 'Absolutely not OK'
    })
});

const shuffleArray = (array) => {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
};