// Exercise 1

// hello = () => {
    // ! Part 1
    // alert(`Hello World`)

    // ! Part 2
    // const container = document.getElementById('container')
    // const hello = document.createElement('p')
    // hello.textContent = 'I love Gabby'
    // container.appendChild(hello)

   

// }

// const interval = setInterval(hello, 2000)

// ! Part 3
// onclick HTML 

// const button = document.getElementById('button')
// button.addEventListener("click", clear)

// clear = () => {
//     clearInterval(interval)
// }
// ! Clear Interval doesn't work
// ? Check why

// Exercise 2


let spaces = 0
let interval

myMove = () => {
    interval = setInterval(moveBox, 1)
    return interval
    }
    
moveBox = () => {
    spaces = spaces +  1
    const box = document.getElementById('animate')
    box.style.left = spaces + 'px'
    
    if (spaces === 350) {
        clearInterval(interval)
    }
}

const container = document.getElementById('container')




