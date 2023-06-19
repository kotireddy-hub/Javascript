

let startTable = 1;
const endTable = 2;

while( startTable <= endTable){

    console.log(`startTable ${startTable}`);
    let startNumber = 1;
    let endNumber = 10;

    while(startNumber <= endNumber){

        console.log(startNumber,"startNumber");
        const table = startTable * startNumber;
        console.log(`${startTable} X ${startNumber} = ${table}`);
        startNumber++;
    }
console.log("======================================================");

startTable++;

}