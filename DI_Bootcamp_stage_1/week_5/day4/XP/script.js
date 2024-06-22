// Exercise 1

// hello = () => {
//     //  Part 1
//     alert(`Hello World`)
// }

//     // ! Part 2
// addParagraph = () => {
//     const container = document.getElementById('container')
//     const hello = document.createElement('p')
//     hello.textContent = 'Hello there!'
//     container?.children.length <  5 ? container?.appendChild(hello) : clearParagraphInterval()
    
// }

// setTimeout(hello, 2000)
// setTimeout(addParagraph, 2000)
// // ! Part 3
// // onclick HTML 

// const int = setInterval(addParagraph, 2000)
// const button = document.getElementById('clear')
// button?.addEventListener("click", clearParagraphInterval)


// clearParagraphInterval = () => {
//     clearInterval(int)
// }
// // ! Clear Interval not working
// // ? Check why

// Exercise 2
// let spaces = 0
// let interval;

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

// exercise 3
const yellowBox = document.getElementById("target");
const redBox = document.getElementById("box");

dragStart = () => {
    console.log(`dragstart`);
}

allowDrop = (event) => {
    event.preventDefault();
    console.log(event);
    yellowBox.classList.add("is-hovered");
}

handleDrop = (event) => {
    console.log(handleDrop);
    yellowBox.classList.remove("is-hovered")
    yellowBox.append(box)
}



