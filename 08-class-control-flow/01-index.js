/*1.trffice signal 

green - move 
red light  - stop 
yellow light - slow move 

"light shuold be red,green or yellow"'
*/

const GREEN_LIGHT = "green";
const RED_LIGHT = "red";
const YELLOW_LIGHT = "yellow";

const CURRENT_LIGHT = "Blue".toLowerCase();

if (CURRENT_LIGHT === GREEN_LIGHT) {
    console.log(`Move current light is ${CURRENT_LIGHT}`);
} else if (CURRENT_LIGHT === RED_LIGHT) {
    console.log(`Stop  current light is ${CURRENT_LIGHT}`);
} else if (CURRENT_LIGHT === YELLOW_LIGHT) {
    console.log(`Move Slow current light is ${CURRENT_LIGHT}`);
} else {
    console.log(`Light shoud be red,green or yellow current light is ${CURRENT_LIGHT}`);
}

/*ternary operator
condition ? trueBlock : falseBlock;

hyd to guntur

ticket book - avvaiable 
10 - 5  - confim 

10 - 20 - 10 confi 

*/

const current_avaiable = 10;
const booking_ticket = 5;

(current_avaiable > booking_ticket) ? console.log("confirm you ticket") : console.log("not confirm you ticket");


const cureent_age = 10;

const Vote = cureent_age >= 18 ? "I can vote":"can not vote";
console.log(Vote);


const new_age = 25;
const vote_age = 18;

const checkingCanVote = new_age >= vote_age;
const trueStatement = "I can vote";
const falseBlock = "can not vote";

const canIVote = checkingCanVote ? trueStatement : falseBlock;

console.log(canIVote);




















