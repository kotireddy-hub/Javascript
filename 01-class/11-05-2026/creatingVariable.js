var abc = '123' // char
var _abc = 12; // _
var $abc = 123; // $


//var 12345 = "123" // error

// es6 
//let
let abc = '123' // string
let b = 12; // number
let c = true; // boolean

//const 
const a = 10;
const d = 'hello';
const e = true;




var a = 10;

console.log(a); // 10
// var a 

// a = undefined 
// a =10 
// conosole.log(a) // 10




console.log(b) //undefied
var b = 20;



//var b 
 // b = undefined
 //console.log(b);
 //b = 20
 
 
 let c = 20;
 console.log(c); // 20
 
// console.log(d); // Cannot access 'f' before initialization // error
//  let d = 30;

const e = 30;
console.log(e); // 30

console.log(f); // error //Cannot access 'f' before initialization
const f = 40;


//redeclartion

var a = 20;
var a = 30;
console.log(a, '30');

// let b = 30;
// let b = 40;
// console.log(b, "===") //Identifier 'b' has already been declared

const c = 30;
const c = 40;
console.log(c); // Identifier 'c' has already been declared

// hoisting

console.log(a) // undefined by defult javascript 
var a = 10;

console.log(b); //Cannot access 'b' before initialization
let b = 30

console.log(c); //Cannot access 'c' before initialization
const c = 40;