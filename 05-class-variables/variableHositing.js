//console.log(variable); // undefined 
var variable = 20;

//variable hoisting ? 
//gobal scope
var ax =20;
console.log(ax); // 20
ax = 30;

function info(){
    //local scope
    console.log(ax); // 30
    var ax = 40;
}

console.log(ax); // 40
info();


// setp 1
var ax;
info();

//step2
var ax = 20;
console.log(ax); // 20
ax = 30;

//step3
console.log(ax); // 30

//setp4
var ax;
ax = undefined
console.log(ax); // undefined
ax = 40



var axx =20;
console.log(axx);// 20
axx = 30;

function info(){
    console.log(axx);//undefned
    axx = 40;
}

info();
console.log(axx);//30

