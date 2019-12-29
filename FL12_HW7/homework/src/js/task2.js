const min = 0;
const addMax = 4;
const I = 4;
const MAX = 8;
const PRIZE = 100;
let max = 8;
let totalPrize = 0;
let prize = 100;
let addPrize = 100;
dividePrize = 2;
let randomNumber = Math.floor(Math.random()*(max - min)+min);


if (confirm("Do you want to play a game?")){
    for (let i = 3; i > 0; i--){
        let userNumber = +prompt(`Choose a roulette pocket number from ${min} to ${max}
            \nAttempts left: ${i}
            \nTotal prize: ${totalPrize}$
            \nPossible prize on current attempt: ${prize}$`);
        if (randomNumber === userNumber){
            totalPrize += prize;
            if (confirm(`Congratulation, you won!   Your prize is: ${totalPrize} $. Do you want to continue?`)){
                max += addMax;
                randomNumber = Math.floor(Math.random()*(max - min)+min);
                addPrize *= dividePrize;
                prize = addPrize;
                i = I;
            } else {
                alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
                if (confirm("Do you want to play again?")){
                    max = MAX;
                    randomNumber = Math.floor(Math.random()*(max - min)+min);
                    i = I;
                    prize = PRIZE;
                    addPrize = PRIZE;
                    totalPrize = 0;
                } else {
                    break;
                }
            }
        } else {
            if (i !== 1){
                prize /= dividePrize;
            } else {
                totalPrize = 0;
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                if (confirm("Do you want to play again?")){
                    max = MAX;
                    randomNumber = Math.floor(Math.random()*(max - min)+min);
                    i = I;
                    prize = PRIZE;
                    addPrize = PRIZE;
                }
            }
        }
    }
} else {
    alert("You did not become a billionaire, but can");
}