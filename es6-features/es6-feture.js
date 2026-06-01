function DefaultPara(a,b=10) {
  console.log(a,b)  
}

DefaultPara(20, 30)
    



function area(height, width){
    height = height || 40;
    widht  = width || 50 
    return height * width;
}

console.log(area(20,30))



function arrFun(a,b = 10){
    console.log(a,b)
}

arrFun(50)

//Template Literals 
//es6
const fName ="Hi";
const lName = 'Hello'
const fullName = `you're name ${fName} ${lName}`;
console.log(fullName);

//es5 
var name = 'you"re name ' + fName + '' + lName; 
console.log(name);


//multi -line string

//es5 
var promot = ' Hello \n' + 'Hi \n' + 'welcome'

console.log(promot)

//es6 

const userPromot = `Hello 


Hello 


hhh

test`

console.log(userPromot)

//Destructring 

//es5
const arr = [1,2,3,4,5];
const index0 = arr[0] // 1
const index1 = arr[1] // 2
const index2 = arr[2] // 3
console.log(index0)
console.log(index1)
console.log(index2)

//
//es6
const [a,b] = arr;
console.log(a,b); //1,2

const [d,,,,e] = arr
console.log(d,e); //

const [ar1,ar2,ar3,ar4,ar5,ar6 = 10] = arr;

console.log(ar5,ar6)


const userName = ['Test1','Test2'];

const [user1,user2,user3 = 'Test3'] = ['Test4','Test5'];
console.log(user1)
console.log(user2)
console.log(user3)

let [userVal1,userVal2] = ['new1','new2'];

//swapping item 
console.log(userVal1, userVal2, "==== before swapping");

[userVal1, userVal2] = [userVal2, userVal1];

console.log(userVal1, userVal2, "=== after swapping");
