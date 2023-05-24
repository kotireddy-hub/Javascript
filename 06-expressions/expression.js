var userDeatils = {
    "name":"koti",
    "age":29,
    "haveBike":true
};
//(expression.identifier) userDeatils.haveBike
//(expression[identifier]) userDeatils[haveBike]
console.log(userDeatils.haveBike,"====");
console.log(userDeatils["haveBike"],":::::");

//Array

var userDeatilsData = ["koti",29,true];

console.log(userDeatilsData[0]);
console.log(userDeatilsData[1]);
console.log(userDeatilsData[2]);



var userInfo = {
    "name":"koti",
    "company":{
        "firstComany":"rubies tech",
        "secondcomany":"swoop talent"
    }
};


console.log(userInfo.company.firstComany);
console.log(userInfo.company["secondcomany"]);


var userInfoDeatils = ["koti",29,["rubies","swoop"]];

console.log(userInfoDeatils[2]);

console.log(userInfoDeatils[2][1]);



var fname ="kotireddy";
var lname ="kamiredy";

var info = {
    "firstName":fname,
    "lastName":lname,
    "fullName":`${fname} ${lname}`
}
console.log(info,"==== info");

var tableNum = 5;

console.log(`${tableNum} X 1 = ${tableNum*1}`);
console.log(`${tableNum}*2 = 4`)
console.log(`${tableNum}*3 = 6`)
console.log(`${tableNum}*4 = 8`)
console.log(`${tableNum}*5 = 10`)
console.log(`${tableNum}*6 = 12`)
console.log(`${tableNum}*7 = 14`)
console.log(`${tableNum}*8 = 16`)
console.log(`${tableNum}*9 = 18`)
console.log(`${tableNum}*10 = 20`)