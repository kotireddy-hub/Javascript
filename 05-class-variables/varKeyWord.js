var a = 10;
if(true){
   var a = 20;
   // console.log(a,"Blocklevel scope");
}
//console.log(a,"Global Level Scope");


var b = 20;

if(true){
    b = 30;
    //console.log(b);
}
//console.log(b); // global local effect vaiable hosisting 

// redeclare and re assignment 
var c = 20;
var c = 30;
//console.log(c);

function scope () {
    var localScope = 20;
};
//console.log(localScope,":: localScope")

//let
// assignmet 
let d = 20;
d = 30;
//console.log(d);

// reclare
//let e = 20; // Cannot redeclare block-scoped variable 'e'.ts(2451)
let e = 30;


let aa = 10;
if(true){
   let aa = 20;
   // console.log(aa,"Blocklevel scope");
}
//console.log(aa,"Global Level Scope");

let aaa = 10;
if(true){
   aaa = 20;
    //console.log(aaa,"Blocklevel scope");
}
//console.log(aaa,"Global Level Scope");

for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  
  //console.log(i);


//const 

const x = 10;

const aaaa = 10;
if(true){
   const aaaa = 20;
    console.log(aaaa,"Blocklevel scope");
}
console.log(aaaa,"Global Level Scope");

//const x;
//x = 20;

{
    const x1 = 2;
    console.log(x1);
  }
  console.log(x1);