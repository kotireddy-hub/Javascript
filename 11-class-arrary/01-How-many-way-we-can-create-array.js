/* two way 

1.array literal 
const arr = []
syntax:-
const arr = [element1,element2,.....,elementN];

2.constructor 
const newArray = new Array();

*/

// array literal
                    //  0     1         2
const literalArray = ["red","green","Yellow"];
console.log(literalArray.length)
console.log(literalArray,"before modifcation");
literalArray[2] = "blue";
console.log(literalArray,"after modification");

// array constructor

const newArray = new Array(2); // array 3 ele
newArray[0] = 10;
newArray[1] = 20;
newArray[2] = 30;
console.log(newArray[0],"new array of 1");
newArray[2] = 40;
console.log(newArray,"New array")
//console.log(newArray.length);

const score = new Array(1,2,3,4,11);
console.log(score[1],"score value 2")
//console.log(score.length);


const color = new Array("red");
//console.log(color.length)

const arr = Array(2);
console.log(arr);
const arrWithData = Array("koti",29,true);
console.log(arrWithData);


const classStudent = ["seshi","Divya","Anil"]; // while for do while for of  // es6 new  map,filter,reduce
console.log(classStudent);
// we need to insert data in an array end by using push method
classStudent.push("Boya");
classStudent.push("Ruchitha");
console.log(classStudent);

// to remove element in array at the end by using pop
classStudent.pop();
console.log(classStudent);

// to add element in array at the start by using unshift
classStudent.unshift("koti");
console.log(classStudent);

// to remove element in array at the start by using shift

classStudent.shift();
console.log(classStudent);

const isAnArray = Array.isArray(classStudent);
console.log(isAnArray); 

const obj = {"name":"kooti","age":29};
const isArr = Array.isArray(obj);
console.log(isArr);
