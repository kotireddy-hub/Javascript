/* user deatils 
full name
company 
location 
*/


const fullName = "Koti";
const company = "SAP";
const location = "HYD";
// function decleartion
function createUserDeatils(fnam,comp,loc){
    console.log("Welcome to User");
    const userDeatils = {
        "fullName":fnam,
        "company":comp,
        "location":loc
    };
    console.log(userDeatils);
    return userDeatils;
}


createUserDeatils(company); // invoke;
createUserDeatils("Seshi","campgmin","HYD");
createUserDeatils("Divya","SAP","HYD");
const newUser = createUserDeatils("Anil","HCL","HYD"); // function expression 

console.log(newUser,"New User");
