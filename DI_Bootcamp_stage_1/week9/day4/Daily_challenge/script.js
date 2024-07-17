

document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    console.log(name);
    const lastName = document.getElementById('lastname').value;
    console.log(lastName);

    const result = {
        name: name,
        lastName: lastName
    };

    const jsonResult = JSON.stringify(result);

    const display = document.getElementById('display');

    const object = document.createElement('p');
    object.textContent = jsonResult;
    
    display.appendChild(object);
})


