let START_VALUE = 1;

let END_VALUE = 10;

let counter = 0;
while (START_VALUE <= END_VALUE) { //T // T
    counter = counter + 1;
    console.log(counter); //1  //1
    START_VALUE++; //1//2//3
}

// 1 to 10 display 

// start  - 1


/* while(condtion){
    // code here
}
*/
/*
2 * 1 = 2
2 * 2 = 4

1 <= 10 - T 
table = 2 * 1;
table = 2
tabledata = 2 X 1 = 2
2 X 1 = 2
2

2<= 10
*/

const tableNumber = 2;

let startNumber = 1;

const endNumber = 10;
while( startNumber <= endNumber){
const table = tableNumber * startNumber;
const tableData = `${tableNumber} X ${startNumber} = ${table}`;

console.log(tableData);
startNumber++;
}





