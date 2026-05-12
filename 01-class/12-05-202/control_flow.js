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