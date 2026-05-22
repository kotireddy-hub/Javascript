// arrow - es6
// normal function 

// noraml function 

//function functionName() {}

// function functionName( arg1, arg2){}

// arrow function 
// const arrFun = () => {}
//const arrFun = (arg1, arg2) = > 


// return statment 

// function functioName() { return  somthing} // norml
// const arrowFunc = () =>{ return somthing} // arrow 
// const arrowFunc = () =>{ somthing } // arrow 

// no arguments 

function welcome(){
    console.log(arguments) // it will consider object values 
    console.log(arguments[0])
}

welcome("Hello", "Test");


// const wel = () => {
//     console.log(arguments)
// };

// wel("Today");


// this 

// normal function
const obj = {
    name:'abcd',
    age: 30,
    print: function(){
        console.log(this)
    }
}

obj.print();

// arrow 
const arrObj = {
    name:'DASA',
    age: 31,
    printArrowFun: () => {
        console.log(this)
    }
}


arrObj.printArrowFun();

// declaration
declarFun();

function declarFun(){
    console.log('Hello')
};

// mul();

// const mul = () => {
//     console.log('hello')
// }




function passingDefaultParams(arg1, arg2 = "Hi"){ // arg2  = Test || Hi
   console.log(arg1,arg2) 
}


passingDefaultParams('Hello', "Test")


function mainFun(){
    function funName(){
        console.log("inside function")
    }
    funName();
    return 'Retuing Main function '
}

console.log(mainFun())


function add(x){
    return function(y){
        return function (z){
               return x + y + z; 
        }
    }
}

console.log(add(2)(3)(4))






