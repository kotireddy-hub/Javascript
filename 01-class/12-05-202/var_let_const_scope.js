// scope
//two scope
//1. local  - {} // function () {}
//2. global -  one top file or top function 
var a = 20; // global scope
const c = 40;
let d = 50;

function print(){
var b = 30 // local scope
console.log(a); // 20
console.log(b); // 30
console.log(c);
console.log(d);
};

console.log(a); // 20
console.log(c);
console.log(d);
//console.log(b)//ReferenceError: b is not defined

print();