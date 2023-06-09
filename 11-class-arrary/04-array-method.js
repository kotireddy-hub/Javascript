// at postive or native  index 

const friendLists = ["anil","boya","nari","seshi","boya"];

//const frnd = friendLists.at(1);
//console.log(frnd); 


// entries // 0 -> value

let arr_entries = friendLists.entries();
console.log(arr_entries.next().value);

for( let [index,ele] of friendLists.entries()){
    console.log( `Index: ${index} <----> Element: ${ele}`);
    console.log( [index, ele]);
}

// last index of array lastIndexOf()

const lastIndex = friendLists.lastIndexOf("seshi");
console.log(lastIndex);//4


// array to string 
const convertArrayToString = friendLists.toString();
console.log(convertArrayToString, typeof(convertArrayToString)); //"anil,boya,nari,seshi,boya"

// array reverse 

const reverseArray = friendLists.reverse();

console.log(reverseArray);//[ 'boya', 'seshi', 'nari', 'boya', 'anil' ]

// slice -> array item remove  (1) // based (1,2) //two remove

const removefriends = friendLists.slice(2);
console.log(removefriends);

const newArray = [1,2,3,4,5];
                //0 1 2 3 4

console.log(newArray.slice(3));//[ 4, 5 ]

console.log(newArray.slice(2,5));//[ 3, 4, 5 ]

// sort 

const sortArray = [4,5,6,1,2,3];
console.log(sortArray.sort());

const sortAlphArray = ["a","c","d","e","b"];
console.log(sortAlphArray.sort());

const newArraySort = [39,40,50,69,66];
                    // a = 39 b =40 // a -b / 39 - 40 = -1 // false
                    // a = 40 b = 50 // 40 - 50 = -10 // false
                    //a = 50 b=69 // 50 - 69 = -19 // false
                    // a = 69 b = 66 // 69 -66 = 3 //true 
newArraySort.sort(function(a,b){ // newArraySort[0] // 39 newArraySort[1]
 return a - b; // post -1 false || pos true // sort //post //[39,40,50,66,69]
})

console.log(newArraySort.sort());


// split method
const frndListstringData = "seshi,nari,anil";
const splitArray = frndListstringData.split(",");
console.log(splitArray);

// join
const frndListArrayData = ["seshi","Divya_kaniaha","anil","nari"];
const splitString = frndListArrayData.join(",");
console.log(splitString);

// "include" is used to find value is there not 

console.log(frndListArrayData.includes("Divya_"));

// find is method it will return value
const listNumber = [35,56,66,76,100];
function findAge(num){
return num == 56
}

console.log(listNumber.find(findAge));

const findNum = listNumber.find((num)=>{ return num >= 100});
// [343===] => 34 => 34 >=100 F
//[] => 56 => 56 >=100 F


console.log(findNum);

//findindex this method will return index of the value

const findindex = listNumber.findIndex(findAge);
console.log(findindex) // -1

//every is checking all the element and all should be equal and it true / faslse
const everyEle = listNumber.every(findAge);
console.log(everyEle);

// some is checng all the element if it match one critearia and it will true
const someMethod = listNumber.some(findAge);
console.log(someMethod);

