// toLowerCase
console.log('HELLO'.toLowerCase())

//concat 

const str1 = 'Hello'
const str2 = "Hi";

console.log(str1.concat(str2));

//trim
const str3 = "             trim            ";
console.log(str3.trim())

//trimStart
const str4 = "             trimstart";

console.log(str4.trimStart())

//trimEnd
const str5 = "timeEnd         ";
const str6 = "          Welcome         ";

console.log(str5.trimEnd())
console.log(str6.trimEnd())


//padStart
console.log( 'hello'.padStart(10, '*'));

//padEnd
console.log( 'hello'.padEnd(10, 'h'));

//charAt
console.log('hello'.charAt(1));

console.log('hello'.charCodeAt(1))



console.log('Hello'.charCodeAt(0));

console.log('hello world'.split(' ')); // retrn arry 

console.log("Hello World @ Hi".split('@'));

console.log('Hello,Hi,Welcome'.split(','));
//indexof
console.log( 'Hello world'.indexOf('w'))


//lastIndexOf
console.log("Hello world".lastIndexOf('o'))

//include 
console.log("Hello world".includes('gdgdg'))

//startsWith
console.log("Hello SSS".startsWith("Hello"))
console.log("Hello SSS".startsWith("SSS"))

//endsWith
console.log("Hello world".endsWith('world'))

console.log("Hello world".endsWith('d'))

console.log("Hello world".endsWith('Hello'))