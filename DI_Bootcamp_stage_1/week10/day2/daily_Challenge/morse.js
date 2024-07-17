let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

const toJs = (jsonString) => {
    return new Promise((resolve, reject) => {
        let objMorse;
        try {
            objMorse = JSON.parse(jsonString);
            resolve(objMorse)
        } catch (error) {
            reject(`Error: this is not a valid JSON`)
        }
        if(Object.keys(objMorse).length === 0){
            reject(`Error: This is an empty JSON object`)
        }
    });
};

const toMorse = (morseObj) => {
    const userStr = prompt(`Enter a aword: `)
    if(!userStr){
        return Promise.reject(`No input provided`)
    }
    const arrStr = userStr.split("")
    
}

toJs(morse)
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
