const arr = [1,2,3,4];

/* for(var i =0; i<10; i++){}
for(var index of arr){}
*/

for(var i = 0; i < arr.length; i++){ // 3tmie 
    console.log(arr[i], "for loop")
}

for( var value of arr){   //1time
    console.log(value)
}

//for in used for object  
/*{
    'key':value
}
name, age, isActive
*/

const userData = {
    'name': "Hi",
    'age': 20,
    'isActive': true
}

console.log(userData.name)
console.log(userData.age)

for (var key in userData){
    console.log(key, userData[key])
}

//forEach
/* arr.forEach(function(x){
    //code here
})*/

arr.forEach( function(value){
    console.log(value)
})
