//  converting a Json with parsing method - (break from JSON to array)

// WHY CONVERT TO JSON
// Because the http protocol only sends text
// hypertext transfer protocol
// hence text/string

// let str = `[{

//     "userId": 1,
//     "id" : 5,
//     "title" : "Here it is",
//     "body" : "And here it is"
// }]`

//Convert from a Json
//Stringify method

let users = [
    {id:1, name: "aaa", username: "a .a a."},
    {id:1, name: "bbb", username: "b.b.b"},
    {id:1, name: "cccc", username: "c.c.c."}
]

let jsonUsers = JSON.stringify(users, undefined, 2)
//? what is the UNDEFINED 
console.log(jsonUsers);