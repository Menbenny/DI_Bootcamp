const numberOfBeers = prompt(`How many beers? `)

const lyric = makeLyric();
makeLyric = (num) => {

    console.log(`Is this number more than one ${isPlural(num)}`);
    `${num} bottles of beer on the wall
    ${num} bottles of beer
    Take 1 down, pass it around
    ${num - 1} bottles of beer on the wall`;

    return lyric
}

isPlural = () => {
    return (num > 1)
}
makeLyric()
