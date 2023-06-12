//decleartion
function declarationUser(name){
    console.log(`Welcome To javascript class ${name}`);
};

declarationUser("Anil");
declarationUser("Seshi");


//function mathOperation(a = 0,b = 0){
function mathOperation(a,b){
    console.log(`a is number ${a}`);
    console.log(`b is number ${b}`);

    const add = a + b;
    const sub = a - b;
    const mul = a * b;
    const div = a / b;
    const moduleDiv = a % b;

    console.log(add,"Add");
    console.log(sub,"sub");
    console.log(mul,"mul");
    console.log(div,"div")
    console.log(moduleDiv,"moduleDiv");
};

 mathOperation();
 mathOperation(100)
mathOperation(100,200);