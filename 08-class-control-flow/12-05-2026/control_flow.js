//if
//if-else
//if- else if 
//while
// ternary operatior

//if

var a = 20;
var b = 10;
//if(condition){ // true
    //code here
//}
if(b < a){ // 10 < 20 T
    console.log('Yes b is lessthan a')
}

// if-else
//if(condition){
  // code block  
// }else{
  //code block  
// }
if(b > a){
   console.log('Yes b is lessthan a') 
}else{
    console.log('No b is lessthan a')
}

// if(condition){
    
// }else if(condtion){
    
// }else if(condition){
    
// }else{
    
// }

//1. a is equal b
// 2. a is lessthan b 
// 3. a is not lessthan b

if( a === b){
    console.log('a is not equal to b')
}else if(a < b){
    console.log(' yes a is lessthan b')
}else if(b < a){
   console.log(' not a is lessthan b') 
}else{
    console.log('none of above condition are not true')
}

// == && ===
// ====

2 === 2 // true
2 ==='2' // false

2 == 2 // true
2 == '2' // true

//list of false values are 
// 0
var dd = 0;
if(dd){
    console.log('dd is not false statment');
}else{
    console.log('dd is false statement')
}
"" == false// is true
0 == false //is true
0n == false //is true
NaN == false //is false
null == false //is false
undefined == false //is false

//1.while
//2. do-while
//3. swith
//4. Ternary Operators
//for 
// forEach

//syntax
/*
while(conditon){
    // code here
} */

var a = 30;
var b = 30;
while( a==b){ // 30 == 30 // 30 == 31
    console.log(a); // 30
    b++; // 31
}

/* do{
    //code here
}while(condition)
*/

do{
    console.log(a,b); // 30 , 31 // 31 31
    a++; // 32
}while(a == b) // 30 == 31


//switch
/*
switch(condtion){
    case a:
    code here 
    break;
    case b:
    code here;
    break
    default:
    code here;
}
*/


var a = 'a';
var b = 'b';
var c = 'c';
var vv = 'sss'
switch(a){
   case 'a':
       console.log(' this cases a');
       break;
  case 'b':
        console.log(' this is cases b');
       break;
   case 'c':
        console.log(' this is cases c');
       break;
 default:
   console.log('Hi');
}


//syntax // condition ? true statment : false statment 
// if(){}else{}

if(a === 20){
    console.log(' a is equal to b')
}else{
  console.log(' a is not equal to b')  
}

10 === 20 ? console.log(' a is equal to b') :  console.log(' a is not equal to b');

//for loop

/* for( assigment; conditon; increemnt){
    code here
}*/

// 1 to 10

for (var i = 1; i <= 10; i++){ // i = 1  1 <= 10 T // 2 - i = 2 2 <10 T
    console.log(i) // 1 // 2
}
