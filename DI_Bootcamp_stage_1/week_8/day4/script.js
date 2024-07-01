//Exercise 1
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// output : ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
// const country = "USA";
// console.log([...country]);

//output : ['U', 'S', 'A']

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);
//output : [undefined, undefined]

//Exercise 2

// Using this array:

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael",.. etc

// const welcomeStudents = users.map(user => `Hello ${user.firstname}`);
// console.log(welcomeStudents);

//Exercise 3
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const combinedString = epic.reduce((acc, word) => acc + ' ' + word);
// console.log(combinedString);

//Exercise 4
// const students = [
//     { name: "Ray", course: "Computer Science", isPassed: true }, 
//     { name: "Liam", course: "Computer Science", isPassed: false }, 
//     { name: "Jenner", course: "Information Technology", isPassed: true }, 
//     { name: "Marco", course: "Robotics", isPassed: true }, 
//     { name: "Kimberly", course: "Artificial Intelligence", isPassed: false }, 
//     { name: "Jamie", course: "Big Data", isPassed: false }
// ];

// const passedStudents = students.filter(student => student.isPassed);
// console.log(passedStudents);
