const cars = ["tata","volvo","BMW","KIA","AUDI","SKODA"];

// console.log(cars[0]) //tata
// console.log(cars[1]);
const carsLength = cars.length;
console.log(carsLength,"car length"); // 6
let current_index = 0;

// 0 < 6  | T
// 1 < 6  | T
// 2 < 6 | T
// 3 < 6 | T
// 4 < 6 | T
// 5 < 6  | T
// 6 < 6 | F

while (current_index < carsLength) {
    console.log(current_index, "current_index") // 0 //1 // 2
    console.log(cars[current_index]); // tata //volvo // BWM
    current_index++; //1 // 2 //3 //4 //5
    console.log(current_index, "final current index")
}