// {}

const userDeatils = {
    //key : value 
    "name":"koti",
    "age":29,
    companieList: function(){
        // array of object
        return [{
            "company":"SAP",
            "endDate":"N/A"
        },
        {
            "company":"Swoop",
            "endDate":"16/08/2021"
        },
        {
            "company":"Rubies Tech",
            "endDate":"16/09/2019"
        }]
    },
    "totalExp":"7Years"
}

console.log(userDeatils.name);

console.log(userDeatils.companieList())

console.log(userDeatils.name = "Seshi");
console.log(userDeatils)
//hasOWnproperty 

console.log(userDeatils.hasOwnProperty("exp"));

console.log(Object.keys(userDeatils));
console.log(Object.values(userDeatils));
console.log("================");
console.log(Object.entries(userDeatils));


// for of 
for (const [index, values] of Object.entries(userDeatils)){
    console.log({key:index,value:values})   
}

// for in 
for (const data in userDeatils){
    console.log(data,"for in");
}