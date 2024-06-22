// Exercise 1

hello = () => {
    //  Part 1
    alert(`Hello World`)
}

    // ! Part 2
addParagraph = () => {
    const container = document.getElementById('container')
    const hello = document.createElement('p')
    hello.textContent = 'Hello there!'
    container?.children.length <  5 ? container?.appendChild(hello) : clearParagraphInterval()
    
}

setTimeout(hello, 2000)
setTimeout(addParagraph, 2000)
// ! Part 3
// onclick HTML 

const int = setInterval(addParagraph, 2000)
const button = document.getElementById('clear')
button?.addEventListener("click", clearParagraphInterval)


clearParagraphInterval = () => {
    clearInterval(int)
}
// ! Clear Interval not working
// ? Check why

// Exercise 2
// let spaces = 0
// interval;

// myMove = () => {
//     interval = setInterval(moveBox, 1)
//     return interval
//     }
    
// moveBox = () => {
//     spaces = spaces +  1
//     const box = document.getElementById('animate')
//     box.style.left = spaces + 'px'
    
//     if (spaces === 350) {
//         clearInterval(interval)
//     }
// }

// const container = document.getElementById('container')




