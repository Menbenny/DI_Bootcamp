// var container = document.getElementById("container")
 
// var pete = document.querySelectorAll("ul > li")
// console.log(pete);

// console.log(container);

// 1
// var first = document.body.children[0]; 
// var first = document.body.firstElementChild;  
// console.log(first);

//2
// var second = document.body.children[1];

// console.log(second);

//3
// var third = document.body.children[1].children[1];
// var third = document.body.children[1].lastElementChild;
// console.log(third);

// Exercise 2
//1
// var users = document.getElementById("container")
// var users = document.body.children[0]
// var users = document.querySelector("div")
// console.log(users.innerHTML);

//2
// var list = document.getElementsByClassName("list")
// for (let x = 0; x < list.length; x++) {
//     var children = list[x].children
//     for ( let y = 0 ; y < children.length; y++) {
//         console.log(children[y].innerHTML);
//     }
// }

// var list = document.querySelectorAll('.list') 

//     list.forEach(function(ul) {
//         ul.querySelectorAll('li').forEach(function(li){
//             console.log(li.innerHTML);
//         })
//     })

// console.log(list);

//3
// var list = document.getElementsByClassName('list')

// for (let x = 0; x < list.length; x++) {
//     console.log(list[x].firstElementChild.innerHTML);
// }

// var list = document.querySelectorAll('.list')

// list.forEach(function(ul){
//     console.log(ul.firstElementChild.innerHTML);
// }) 

// ###############################################################################################################################

// let elem = document.querySelector('a')
// const att = document.querySelector('a').removeAttribute('href')

// const test = document.querySelector('a').hasAttribute('href')

// const newAtrribute = document.querySelector('a').setAttribute('href', 'https://www.google.com')

// console.log(test);


// const tagAttributes = document.querySelector('a').attributes

// for (let x = 0; x < tagAttributes.length; x++) {
//     var attributes = tagAttributes[x]
//     console.log(attributes);
// }

// console.log(attribute);

// let styling = document.getElementById('dI')

// styling.style.background = 'maroon';
// styling.style.padding = '3px'
// styling.style.color = 'white'

// styling.style.fontSize = '3em'
// styling.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serifrgia'
// styling.style.color = 'grey'
// styling.style.textDecoration = 'none'


let personForm = document.forms[0]
let att = personForm.elements.weight


console.log(att.value);