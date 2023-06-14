//global scope
const userName ="Koti";

function userDetails(){
    // function scope
    const city = "HYd";
    console.log(userName,city);
};

userDetails();
console.log(userName,city,"global scope");