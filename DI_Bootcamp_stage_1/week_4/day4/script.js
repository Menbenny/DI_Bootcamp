//1
// var container = document.querySelector('div')
// console.log(container);



//2
// var pete = document.getElementsByClassName('list')
// var changeName = pete[0].lastElementChild.textContent
// var changeName = 'Richard'

// console.log(changeName);


// //3
// const lists = document.querySelectorAll('.list')
// lists[1].children[1].remove()

// //4
// lists.forEach(list => list.firstElementChild.textContent = 'ben')

// //Bonus
// lists.forEach(list => list.classList.add('students_list'))

// document.querySelector('ul').classList.add('university', 'attendence')

// EXERCISE 2

// const div = document.querySelector('div')

// div.style.backgroundColor = 'lightblue'
// const divBackground = getComputedStyle(div).backgroundColor
// div.style.padding = '10px'

// const Pete = document.querySelector('ul').children[1]

// Pete.style.border = '1px solid black'
// const body = document.body
// body.style.fontSize = '2em'

// if (divBackground === 'rgb(173, 216, 230)') {
//     let x = Pete.innerHTML;
//     let y = document.querySelector('ul').children[0].innerHTML;
//     console.log(`Hello ${x} and ${y}`)
// }

//Exercise 3 

//2
// document.querySelector('div').id = 'socialNetworkNavigation'

// document.querySelector('div').setAttribute('id', 'socialNetworkNavigation')


//3
// var ul = document.querySelector('ul')
// let newLi = document.createElement('li')
// newLi.textContent = 'Logout'
// ul.appendChild(newLi)

// let firstChild = ul.firstElementChild.textContent
// let lastChild = ul.lastElementChild.textContent

// console.log(firstChild, lastChild);

// Exercise 4

var allBooks = [
    {
        title: 'Think and Grow Rich',
        author: 'Napolean Hill',
        image: 'https://picsum.photos/200/300',
        alreadyRead: true
    },
    {
        title: 'It Ends With Us ',
        author: 'Colleen Hoover 2016',
        image: 'https://picsum.photos/200/300',
        alreadyRead: false
    }
    
];

console.log(allBooks[0]);





