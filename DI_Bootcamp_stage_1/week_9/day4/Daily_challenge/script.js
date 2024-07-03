

render = () => {
    const name = document.getElementById('name')
    const lastName = document.getElementById('lastname')
    const div = document.getElementsByClassName('display')

    div.appendChild(name)
    div.appendChild(lastName)
}

