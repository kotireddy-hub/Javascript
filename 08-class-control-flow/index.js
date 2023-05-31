/* syntax 

if(condition){
    //code here
}
*/

// let age = 29;

// if(age < 30){
//     console.log("i am in if block");
// }


// var vote_age = 17;

// var city = "GT";

// if (city === "GT") {
//     console.log("Yes I am in Guntur");
//     if (vote_age >= 18) {
//         console.log("Yes YOU can vote");
//     }
// }

/* if else 

if(condition - true){
    //coe here
}
else{
    //code here
}
*/
// if(vote_age >= 18){
//     console.log("can vote");
// }else{
//     console.log("can not vote");
// }

var vote_age = 19;

var city = "TS";

/*if(city == "GT"){
    if(vote_age >= 18){
        console.log("can vote");
    }else{
        console.log("can not vote");
    }  
}else{
        console.log("I am in hyd");
        if(vote_age >= 18){
            console.log("can vote");
        }else{
            console.log("can not vote");
        } 
}*/

if(city === "Hyd" || vote_age >= 18){
    console.log(" I can vote in TS");
}else{
    console.log("can not vote");
}


