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




