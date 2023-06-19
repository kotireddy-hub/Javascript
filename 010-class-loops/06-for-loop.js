/* syntax

for(inlitalExperssion/ initalvalue ; condition; updateExpression/increment){
//code
}
*/
const cars = ["tata","volvo","BMW","KIA","AUDI","SKODA"];

const carsLength = cars.length; //6

for( let current_index = 2; current_index < carsLength;current_index++){
    console.log(current_index) //0 //1
console.log(cars[current_index]);
}


for(let i = 0; i<=10;i++){ // true
    console.log(i); // 0 //1
}


const tableNumber = 6;
for( let startNumber = 10; startNumber <= 20; startNumber++){
    const table = tableNumber * startNumber; // 2 * 1 = 2 // 2 * 2 = 4
    const tableData = `${tableNumber} X ${startNumber} = ${table}`; // 2 X 1 = 2
    console.log(tableData);//2 X 1 = 2
}