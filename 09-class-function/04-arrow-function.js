
const multiply = (a,b) => { return a * b}

const mul = multiply(10,20);

console.log(mul);


const add = ((a,b=2) => (
   a + b 
));

const addition = add(4);

console.log(addition);
