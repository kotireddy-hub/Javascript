// if(true){
//     var a = 20;
//   }
//   console.log(a);
  
//   var name ="Divya";
//   //var name ="Seshi";
//   function info(){
//   var name = "kotiredy";
//   console.log(name); // kotireddy
//   }
//   console.log(name,"Global Scope"); // Divya
//   info();
  
//   /* var name
//   info();
//   name = undefined
//   name = "Divya";
//   console.log(name)// Divya
 

//   Local scope 
//   var name
//   name = un
//   name = kotireddy
//   console.log(name); //kotireddy
//   */

//   function infoStr(){
//   let Str = "kotiredy";
//   Str = "Seshi"
//   console.log(Str,"=====");
//   }
//   infoStr();
  
//   // const 

//   const aa = 20;
//   console.log(aa);


var scope = 20;
function info(){
  console.log(scope);
  scope = 30;
};
info();


var tester ="Divya";

function developerInfo(){
  var developer = "Seshi";
  console.log(developer);
};

developerInfo();

// Null and undefined

var a = null; 
// typeof null is an "object"

var a;// by defeult javascript will assign as undefined 
//typeof undefined  is an "undefeined"