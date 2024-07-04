

render = () => {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastname').value;
    const div = document.getElementsByClassName('display')

    const namesObject = JSON.stringify({name: name, lastName: lastName})


    div.appendChild(namesObject)
    
}

