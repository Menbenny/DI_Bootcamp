const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '❤️', name: 'Heart' },
    { emoji: '👍', name: 'Thumbs Up' },
    { emoji: '🎉', name: 'Party' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🔥', name: 'Fire' },
    { emoji: '🌟', name: 'Star' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '☕', name: 'Coffee' },
    { emoji: '😎', name: 'Cool' },
    { emoji: '🌈', name: 'Rainbow' },
    { emoji: '🎶', name: 'Music' },
    { emoji: '⚽', name: 'Soccer Ball' },
    { emoji: '🏀', name: 'Basketball' },
    { emoji: '🍦', name: 'Ice Cream' },
    { emoji: '🧁', name: 'Cupcake' },
    { emoji: '🥑', name: 'Avocado' },
    { emoji: '🍩', name: 'Donut' },
    { emoji: '🌍', name: 'Earth' },
    { emoji: '✈️', name: 'Airplane' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '🎨', name: 'Art' },
    { emoji: '🧸', name: 'Teddy Bear' },
    { emoji: '📚', name: 'Books' },
    { emoji: '💡', name: 'Idea' },
    { emoji: '🛠️', name: 'Tools' },
    { emoji: '🏡', name: 'House' },
    { emoji: '🕶️', name: 'Sunglasses' },
    { emoji: '🌅', name: 'Sunrise' },
    { emoji: '🌙', name: 'Moon' },
    { emoji: '🌊', name: 'Wave' },
    { emoji: '🎁', name: 'Gift' },
    { emoji: '🦄', name: 'Unicorn' },
    { emoji: '🍀', name: 'Clover' },
    { emoji: '🍉', name: 'Watermelon' },
    { emoji: '💪', name: 'Strong' },
    { emoji: '🤔', name: 'Thinking' }
    ];

function generateEmoji(){
 
   
    const randomNumber = Math.floor(Math.random() * 38);
    console.log(randomNumber);
    console.log(emojis[randomNumber])
}

const displayFunc = () => {
    const display = document.getElementById('display');
    const emoji = Object.keys(emojis)
    console.log(emoji);

}
// displayFunc()
// generateEmoji()


module.exports = {
    generateEmoji
}