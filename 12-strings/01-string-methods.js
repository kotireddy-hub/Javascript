// "" / '' ex:- "koti" | 'koti' - string 

const str = "Kotireddy kamireddy";

// includes 

console.log(str.includes("Koti"));

// startsWith
console.log(str.startsWith("K"));

// endsWith
console.log(str.endsWith("ddy"));

//repeat

console.log(str.repeat(3));

//codePointAt() // index 
// A- Z /  65 - 90
// a - z / 97 - 122
console.log(str.codePointAt(6));

//padStart

console.log(str.padStart(10))


console.log(str.length);

// only need to display letter "K"
console.log(str[0]);

// index

console.log(str.indexOf("kamireddy"));

// replace 

console.log(str.replace("kamireddy","K"));

//split 

console.log(str.split(" "))
console.log(str.split(""))

// toLowerCase

console.log("KOTI".toLowerCase());
// to upper case 
console.log("koti".toUpperCase());

// concat 
console.log("Koti".concat("reddy"));

//search

console.log(str.search("reddy"));

//trim()
console.log("    Koti    ".trim());
//trimStart
console.log("    Koti    ".trimStart());

//trimEnd
console.log("    Koti    ".trimEnd())