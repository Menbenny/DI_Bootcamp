generateColors()
let currentColor; 
addListiners()
let isMousePressed = false


function listenToMain() {
    const squares = document.getElementById("main")
    main.addEventListener("mousedown", handleClick)
    main.addEventListener("mousemove", handleMove)
    main.addEventListener("mouseup", handleMouseRelease)
}

function handleMouseRelease() {
    isMousePressed = false
}


function handleClick() {
    if (currentColor == null) return
    isMousePressed = true
}

function handleMove() {
    if (!isMousePressed) return
    console.log(`your mouse is pressed`);
}

function handlehover() {
    if (currentColor == null) return
}


function generateColors() {
    const colorDivs = document.querySelectorAll(".color")
    for (const colorDiv of colorDivs) {
        const randomColor = generateRandomColor()
        colorDiv.style.backgroundColor = randomColor
        colorDiv.dataset.color = randomColor
        colorDiv.addEventListener("click", setCurrentColor)
    }   
}


function generateRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16)
    return "#" + hex
}

function setCurrentColor(e) {
    currentColor = e.target.dataset.color
}