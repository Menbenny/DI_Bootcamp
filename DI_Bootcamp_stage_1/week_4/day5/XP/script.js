

// const playTheGame = () => {
//     let ask = confirm(`Do you want to start the game? `);
//     if (ask === false) {
//         alert(`No problem, Goodbye`);
//     } else {
//         var userNumber = Number(prompt(`Enter a number between 0 - 10: `))
        
//     }
//         if (isNaN(userNumber)) {
//             alert(`Sorry not a number, Goodbye. `);
//         } else if (0 > userNumber || userNumber > 10) {
//             alert(`Sorry it's not a good number, Goodbye. `);
//         } else {
//             computerNumber = Math.floor(Math.random() * 10);
//             alert(`Your number: ${userNumber}
//             \nComputer's number: ${computerNumber}`)
//         }
    
// }



// playTheGame();

// const compareNumbers = (userNumber,computerNumber) => {
    
    
//     if (userNumber === computerNumber) {
//         alert(`WINNER`);
        
//     } else for (let i = 0; i < 4; i++) {
//             if ( userNumber > computerNumber) {
//                 alert(`Your number is bigger then the computer's`)
//             } else (userNumber < computerNumber) ;{
//                 alert(`Your number is smaller then the computer's`)
//             }
//         }
        
       
    


//     console.log(`${computerNumber}  ${userNumber}`);
// }

// compareNumbers(playTheGame());

const playGame = () => {
    const play = confirm(`Would you like to play the game? `);

    if (!play) {
        alert(`No problem, Goodbye!`)
    } else {
        const userNumber = prompt(`Please enter a number between 0 - 10: `);

        // * validity
        if (userNumber === null || isNaN(userNumber)) {
            alert(`Sorry, not a number. Goodbye. `);
        } else {
            const userNumber = parseFloat(userNumber);

            if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
                alert(`Sorry, not a good number. Goodbye. `);
            } else {
                const computerNumber = Math.floor(Math.random() * 11);
                alert(`Your number: ${userNumber}        Computer's number: ${computerNumber}`)
            }
        }
    }
}

// PART II

const compareNumbers = (userNumber, computerNumber) => {
    if (userNumber == computerNumber) {
        alert(`WINNEr`)
    } else if ( userNumber > computerNumber) {
        alert(`Your number is bigger than the computer's, guess again: `)
    }

    if (userNumber < computerNumber) {
        alert(`Your number is smaller than the computer's, guess again: `)
    }
}

