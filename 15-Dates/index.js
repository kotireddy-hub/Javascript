const date = new Date();
console.log(date);
// date 
console.log(date.getDate());
//0,1,2,3,4,5,6
//sun, mon,tus,wen.thu,fri,sat
console.log(date.getDay());

// year
console.log(date.getFullYear());
// motth
console.log(date.getMonth()+1);

//31-07-2023

console.log(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);

console.log(date.toString());
//31/07/2023
console.log(date.toLocaleDateString());

//fetch
//axios
//xml http request
// jquery ajax

