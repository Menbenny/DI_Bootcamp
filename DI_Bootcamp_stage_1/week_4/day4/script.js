//1
// var container = document.querySelector('div')
// console.log(container);



//2
// var pete = document.getElementsByClassName('list')
// var changeName = pete[0].lastElementChild.textContent
// var changeName = 'Richard'

// console.log(changeName);


//3
const lists = document.querySelectorAll('.list')
lists[1].children[1].remove()

//4
lists.forEach(list => list.firstElementChild.textContent = 'ben')

//Bonus
lists.forEach(list => list.classList.add('students_list'))

document.querySelector('ul').classList.add('university', 'attendence')




