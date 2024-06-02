// Exercise 1

document.addEventListener('DOMContentLoaded', function() {
    
    const h1 = document.querySelector('h1');
    console.log(h1);

    
    
    const paragraphs = article.getElementsByTagName('p');
    if (paragraphs.length > 0) {
        article.removeChild(paragraphs[paragraphs.length - 1]);
    }

    
    const h2 = document.querySelector('h2');
    h2.addEventListener('click', function() {
        h2.style.backgroundColor = 'red';
    });

    
    const h3 = document.querySelector('h3');
    h3.addEventListener('click', function() {
        h3.style.display = 'none';
    });

    
    const boldButton = document.getElementById('boldButton');
    boldButton.addEventListener('click', function() {
        for (let p of paragraphs) {
            p.style.fontWeight = 'bold';
        }
    });

    // BONUS: Change font size of h1 on hover
    h1.addEventListener('mouseover', function() {
        const randomSize = Math.floor(Math.random() * 101);
        h1.style.fontSize = randomSize + 'px';
    });

    // BONUS: Fade out the 2nd paragraph on hover
    if (paragraphs.length > 1) {
        paragraphs[1].style.transition = 'opacity 1s';
        paragraphs[1].addEventListener('mouseover', function() {
            paragraphs[1].style.opacity = '0';
        });
    }
});


// Exercise 2

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('myForm');
//     console.log(form);

//     const fnameInput = document.getElementById('fname');
//     const lnameInput = document.getElementById('lname');
//     console.log(fnameInput, lnameInput);

//     const fnameByName = document.getElementsByName('firstname')[0];
//     const lnameByName = document.getElementsByName('lastname')[0];
//     console.log(fnameByName, lnameByName);

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
        
//         const firstName = fnameInput.value.trim();
//         const lastName = lnameInput.value.trim();
        
//         if (firstName === '' || lastName === '') {
//             alert('Please fill in both fields.');
//             return;
//         }

//         const ul = document.querySelector('.usersAnswer');
//         ul.innerHTML = ''; // Clear previous entries
        
//         const li1 = document.createElement('li');
//         li1.textContent = firstName;
//         ul.appendChild(li1);
        
//         const li2 = document.createElement('li');
//         li2.textContent = lastName;
//         ul.appendChild(li2);
//     });
// });


// // Exercise 3

// let allBoldItems;

// function getBoldItems() {
//     allBoldItems = document.querySelectorAll('strong');
// }

// function highlight() {
//     allBoldItems.forEach(item => {
//         item.style.color = 'blue';
//     });
// }

// function returnItemsToDefault() {
//     allBoldItems.forEach(item => {
//         item.style.color = 'black';
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//     getBoldItems();
    
//     const paragraph = document.getElementById('paragraph');
//     paragraph.addEventListener('mouseover', highlight);
//     paragraph.addEventListener('mouseout', returnItemsToDefault);
// });


// // Exercise 4

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('MyForm');
    
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
        
//         const radius = document.getElementById('radius').value;
//         const volumeInput = document.getElementById('volume');
        
//         if (radius === '' || isNaN(radius)) {
//             alert('Please enter a valid radius.');
//             return;
//         }
        
//         const radiusValue = parseFloat(radius);
//         const volume = (4/3) * Math.PI * Math.pow(radiusValue, 3);
        
//         volumeInput.value = volume.toFixed(2);
//     });
// });
