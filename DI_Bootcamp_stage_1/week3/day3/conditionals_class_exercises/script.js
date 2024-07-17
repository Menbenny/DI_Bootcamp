// const age_statement = "What is your age? ";
// let age = prompt(age_statement);

// if (age < 18) {
//     alert(`Sorry, you are too young to drive this car.`);
    
// } else if (age == 18) {
//     alert(`Congradulations on your first year of driving. Enjoy the ride.`);
// } else {
//     alert(`Powering On. Enjoy the ride!`);
// }

// Look up - SOLID Principles
// Best practices 


let a = 2 + 2;


switch (a) {
  case 3:
    alert( 'Too small' );

    // a = 3
    // 3 != 2+2
    // hence too small
    break;
  case 4:
    alert( 'Exactly!' );

    // if a = 4 
    // matches the statement 
    // hence Exactly  
    break;
  case 5:
    alert( 'Too large' );

    // 
    break;
  default:
    alert( "I don't know such values" );
};











// Switch conditional
// ! isn't working !

// switch (age) {
//     case age < 18:
//         alert(`Sorry, you are too young to drive this car.`);
//         break
//     case age == 18:
//         alert(`Congradulations on your first year of driving. Enjoy the ride.`);
//         break
//     case age > 18:
//         alert(`Powering On. Enjoy the ride!`);
//         break
// };