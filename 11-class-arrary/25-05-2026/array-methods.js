// Array is collection items

// furit market  - ban, man, oran, ana 

// const funrit = [ban, man, oran, apple]
// it will stored in index format 

//const arr = [1,2,3,4,5]; // 0 1 2 3 4

//arr[0] - 1

// two ways 
//1. array literal

const arr = [];
const newArr = [1,2,3,4,5]
//variable.length;
console.log(newArr.length)

//constructor 
const conArr = new Array()

              // 0      1         2
const colors = ['red', 'green', 'yellow'];
console.log(colors.length) // 3

console.log(colors, "before update");

//colors[1]

colors[2] = 'blue';
console.log(colors, "after update");


const arr1 = [];
console.log(arr1);
arr1[0] = 1;
arr1[1] = 2;

console.log(arr1)

console.log(arr1.length, "==== arr1")
arr1[arr1.length] = 3; // arr1[2] = 3 // [1, 2, 3] //3
console.log(arr1, "after update arr1")

console.log(arr1.length, "==== after update  length arr1")




//constructor

const newConstructoArray = new Array(3); 
console.log(newConstructoArray.length);
console.log(newConstructoArray);

newConstructoArray[0] = 'Hi'
newConstructoArray[1] = 'Hello'
newConstructoArray[2] = 'Welcome'
console.log(newConstructoArray);

//2.Push
//3.Pop
//4.Shift
//5.Unshift
//1. push - it will insert at end of item
const users  = ['name1', 'name2', 'name3'];
console.log(users, '=== before push');
users.push('name4');
console.log(users, '== after push');

//5.Unshift - it will insert at first 

users.unshift('name');
console.log(users, '== after unshift');

//pop - it will remve the value at end 

users.pop();
console.log(users, '== after pop');
//shift - it will remove the value first

users.shift();
console.log(users, '== after shift');

const isAnArray = Array.isArray(users);

console.log(isAnArray)

const obj = {
    name:"Hi",
    age:20
}
console.log(Array.isArray(obj))


//6.Concat  - =combined into two array

const arr2 = [1,2,3];
const arr3 = [4,5,6];// [1,2,3,4,5,6] or  
const arr4 = arr2.concat(arr3);
console.log(arr4, " ====")
//[4,5,6,1,2,3]
const arr5 = arr3.concat(arr2);

console.log(arr5, " ====")
