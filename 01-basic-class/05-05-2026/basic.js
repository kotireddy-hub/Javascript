var a = 20;
var b = 30;

//a > b // true or false ? 20 > 30  F

var a = 20;
var b =20;

// a >= b // true or false ? 20 >= 20 T

// 10 < 20 // T
// 10 === 10 // T 
// 10 == 10 // T

// 10 !== 10 // F


// what is different  b/w  == & ===
//== 
//1. it will check value equal - ture  
// 2. loosly coupled 

//===
//1. it will check value and also be type  - true
//2. it tightly coupled 


// Logical operator 

// &&  ||  !

// &&

/*  T && T = T
    T && F = F
    F && T = F
    F && F = F

// ||
  
   T || T = T
   T || F = T
   F || T = T
   F || F = F

// !

!true  = false
!false = true 

*/

//example &&

var a = 2;
var  b = 2;

console.log( 2 && 2) // o/p - 2

var c  = (10 > 1 ) && (10 < 1) // false
         // T && F = F
// typeof 

console.log(typeof('Hi')); // string

console.log(0 / 0);  // NaN
console.log( 5 + 'HI') // 5HI
console.log( 5 * 'HI') //NaN


console.log(typeof(0))
const obj1 = {'a':1}; // reference diferent 0bj1 
const obj2 = {'a':1}; // refrence diff obj2 


console.log(obj1 === obj2) // false 
console.log(obj1 == obj2) // false 

// heap memory - 

//  obj -  reference - 

const shallow =  ( obj1, obj2) => {
    return obj1.a == obj2.a
}
console.log(shallow(obj1,obj2 ))