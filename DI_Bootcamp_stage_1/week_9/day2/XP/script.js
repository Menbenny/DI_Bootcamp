//Exercise 1



// Exercise 2
// function displayStudentInfo(objUser){
//     const {first, last} = objUser
//     console.log(first, last);
// }

// displayStudentInfo({first: 'Vic', last: 'Maroth'})

//Exercise 3
// const users = { user1: 18273, user2: 92833, user3: 90315 };

// const arrUsers = Object.keys(users).reduce((arr, key) => {
//     arr.push(users[key]);
//     return arr;
// }, []);

// console.log(arrUsers);

// const double = arrUsers.map(value => value * 2);
// console.log(double);


//Exercise 4
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);
// ! Object


// Exercise 5
    // 4 SUCCESSFUL Extension
// class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };

//exercise 6
// 1. 
//False
//  error

// 2. 
// object2 = 4 //! object2 = object1 (object1.number = 4)
// object3 = 4 //! object3 = object2 (object2 = object1 (object1.number = 4))
// object4 = 5 //! object4 = {number: 5}


// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …
//
class animal {
    constructor(animalName, type, color) {
        this.animalName = animalName;
        this.type = type;
        this.color = color;
    }
}

class mamal extends animal {
    sound(animalSound){
        return `${animalSound} I'm a ${this.type} named ${this.animalName} and I am ${this.color}`
    }
}

const farmerCow = new mamal('Jerry', 'Cow', 'Black and White');
console.log(farmerCow.sound('moooo'));



