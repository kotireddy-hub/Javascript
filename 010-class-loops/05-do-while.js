const cars = ["tata","volvo","BMW","KIA","AUDI","SKODA"];

const carsLength = cars.length;

let current_index = 0;

/*syntax:-

do{
//code 
}while(condition)*/

do{
    //console.log(current_index,"Inital");
    const carList = cars[current_index]
    console.log(carList);
    current_index++;
    //console.log(current_index,"Final") //1 //2
}while(current_index < carsLength)