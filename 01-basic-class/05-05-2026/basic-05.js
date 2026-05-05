/*1. add(+)
2. sub (-)
3. mul (*)
4. divison(/)
5. mulDivison(%)
6. increment (++)
7. decrement(--)*/

var a = 10;
var b = 20;

var c = a + b; // 30 addition
console.log(c) // 30 

var str = 'HI' // typeof(str) - string
var d = 30; // typeof(d) - number
console.log(str + d); //HI30  // implicity type casting 

console.log( 3 + 'str') // 3str 

console.log( 'Hi' +  
"Hello") // HiHello string '' or ""

console.log(`Hi 
    Templa`) // Hi Templa
    
    console.log( 10 - 5)
    console.log( 5 * 3) 
    
    // 10 / 2 = 5
    
//     2) 10 ( 5 - co
//       10
//       -
//       0
//   %   
// 2) 10 (5      
//     10
//     - 
//     0 - reminder
    
    
//     1. increment (++)
//     1.post increment(value++) --  assign later increnemt
//     2. pre increment(++value) --- increment later assign value 
    
//     2. decrment (--)
//     1.post decremtn(value--)  
//     2. pre decrment(--value) 
    
    var a = 5; 
      a++ // 6
      
    var b = a++; // a = 6 , b = 6  a =7
    var c = ++a; //  8 c =8 // a = 8
    console.log(b, "b") // 6
    console.log(c, "C"); //8
    console.log(a, "a") // 8
    
    //comparsion( >, >=, <, <=, !==, ==, ===) 
    
    console.log( 10 > 20) // false 20 < 10 // false
    console.log( 10 >= 10 ) // true
    console.log( 10 !== 10) //false
    console.log( 10 == 10) // true
    console.log(10 == '10') // true // false 
    console.log( 10 === '10', typeof(10),typeof('10'))// typeof 10 - number // tyeof'10'   // false
    
    /* == | ===
    1. == will only the value 
    2. loosly type check
    
    
    1. === will check value & type 
    2. strcly check
    */
    
// logical - ( && , ||, !) // T  - true F - false
 /* && 
 
 T && T = T
 T && F = F
 F && T = F
 F && F = F
 
 ||
 
 T || T = T
 T || F = T
 F || T = T
 F || F = F
 !
 !T = F
 !F = T
 */
 
 console.log(( 10 > 1) && (10 < 1), "===") // T && F  // F 
 
  console.log(( 10 > 1) || (10 < 1), "===") //T
  console.log( ! (10 > 1)) // F
 
 var a = 0;// false
 console.log(a / 0)
 console.log(3 + 'hi')
 console.log(3 * 'hi'); // 
 console.log(4 * '41', typeof('41')) // 
 
 //Number, String, Boolean
 
 //'5' 
 console.log(Number('5'))
 console.log(Boolean('9'))
 
 if(a){
  console.log(a)   
 }
 
 
 