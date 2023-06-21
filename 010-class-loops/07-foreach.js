/* foreach syntax 

arrary.foreach(function(currentvalue,index,arr){})

*/

const cars = ["tata","volvo","BMW","KIA","AUDI","SKODA"];


cars.forEach(function(currentvalue){
    console.log(currentvalue);
});

cars.forEach((currentvalue,index,arr)=>{
    console.log("arrow function")
    console.log(currentvalue,"====",index,"=====",arr)
});