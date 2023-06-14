
const multiply = (a,b) => { return a * b}

const mul = multiply(10,20);

console.log(mul);


const add = ((a,b=2) => ({
   "add":a + b,
   "sub":a-b
}));

const addition = add(4);

console.log(addition);

const modul = (a,b) => a % b;

const data = modul(4,2);
console.log(data,"====");
//console.log(modul(4,2));