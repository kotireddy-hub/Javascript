/**

A function is a piece of code that can be called during the lifecycle of the app to perform a task or return a value. 
A function declaration can be broken down into the following pieces.
  - Name.
  - Parameters. A list of inputs that can be passed into a function.
  - Body. The logic or statements that perform the computation.

1. A function declaration on its own does not do anything. 
2. You make use of functions by calling them. 
3. The return value of the function can be assigned to a variable.

  - Function call. Executes the code inside the function body.
  - Arguments. The values are to be used as parameters in the function.
  - Return value. By default, functions will return undefined but can return the result of computation when the body contains a return statement.

  syntax:-

  //declration
function name(params) {
    
}

// defintion
name()

*/



// declartion 
function MyOwnFun(){
    //functon body
    console.log("This is a fuction")
}

MyOwnFun();//defination // invoke


const firstName = "Kotireddy";
const lastName = "kamireddy";
const age = 29;
const location ="HYD";


const personDeatils = {
    "fnam":`${firstName}`,
    "lName":`${lastName}`,
    "age":`${age}`,
    "location":`${location}`
};

console.log(personDeatils,"Person Deatils")

function userDeatils(fName,lName,age1,location1){
    const deatils = {
        "fnam":`${fName}`,
        "lname":`${lName}`,
        "age":age1,
        "location":location1
    };
    
    console.log(deatils,"User Deatils")
}

userDeatils("Anil","kothpalli",22,"HYD");
userDeatils(firstName,lastName,age,location);
userDeatils("Boya","Reddy",29,"HYD");