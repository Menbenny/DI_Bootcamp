let numberOfBeers = getUserInput();
let numberOfBeersToTakeAway = 1;

//     // const lyric = makeLyric();

getUserInput = () => {
    const answer = prompt(`How many beers?`)
    if (answer == '') return alert(`Please enter something`);
    const number = Number(answer);
    if (Number.isNaN(number)) return alert(`Please enter a number`);
    return number
}

while (numberOfBeers > 0) {
    const lyric = makeLyric(numberOfBeers, numberOfBeersToTakeAway);
    console.log(lyric);
    numberOfBeers -= numberOfBeersToTakeAway;
    numberOfBeersToTakeAway++;
}

makeLyric = (num, counter) => {
    const bottleOrBottles = getBottleOrBottles(num);
    const bottlesToTakeAway = getSmallerNumber(counter, num);
    const remainingBottles = getBiggerNumber(num - counter, 0);
    const remainingBottleOrBottles = getBottleOrBottles(remainingBottles)

    const lyric = `${numberOfBeers} ${bottleOrBottles} of beer on the wall ${numberOfBeers} bottles of beer Take ${bottlesToTakeAway} down, pass it around ${remainingBottles} ${remainingBottleOrBottles} of beer on the wall`;

    return lyric
}

getBiggrtNumber = (a, b) => {
    return a > b ? a : b;
}

getSmallerNumber = (a, b) => {
    return a < b ? a : b;
}

isPlural = () => {
  return num > 1;
}

getBottleOrBottles = (num) => {
    return isPlural(num) ? "bottles" : "bottle"
    }
    

