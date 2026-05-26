// Values();

const furites = ['apple', 'banana', 'manago'];

const iter = furites.values();

console.log(iter)

for (const val of iter){
    console.log(val)
}

//sort  // a b c d -m 

const sortFurites = ['manago', 'apple', 'banana', 'orange'];
sortFurites.sort();
console.log(sortFurites);

const numbSorting = [2,4,5,1,3];
numbSorting.sort();
console.log(numbSorting)

//reverse - org, ban,app, man
const reverseItem = [1,2,3,4,5];
reverseItem.reverse();
console.log(reverseItem)

//indexOf // 0,1,2,3,4,5
const arr = [1,2,3,4,5,5];

const index = arr.indexOf(5);
const index1 = arr.indexOf(6);
console.log(index)
console.log(index1)

//lastIndexOf [1,2,3,4,5,3,5,3];

const newArr = [1,2,3,4,5,3,5,3,2];
const lastIndex = newArr.lastIndexOf(2);
console.log(lastIndex)

//Slice - shallow copy [2,4] = value range  2 beign index - 4 end index
const sliceArr = [1,2,3,4,5]; // 0,1,2,3,4 
                                   //index 0,1,2,3,4
const sclicedArr = sliceArr.slice(2,5); // 1,2,3,4,5 - values
const dd = sliceArr.slice(1,2)

console.log(sclicedArr, dd)
console.log(sliceArr)

//Splice - add element into array or remove element into array
//splice(startindex, howManyIndexremove)
const arr3 = [1,2,3,4,5,6,7];
 //arr3.splice(2,1, 5,6,7,8,9); //start index 2 and remove 2 
console.log(arr3,"====")

//arr3.splice(2) //only remove all elememt of you provde index
arr3.splice(2,1)
console.log(arr3,"=== after")

arr3.splice(2, 3,9,8,0)

console.log(arr3,"=== after ===")

//includes - [1,2,3,4,5] - 5 value

const includeArr = [1,2,3,4,5];
const has5 = includeArr.includes(5);
const notHas5 = includeArr.includes(6);
console.log(has5)
console.log(notHas5)

//find - [1,2,3,4,5] // 0,1,2,3,4 reteurn an value

const findArr = [1,2,3,4,5];
const resultArr = findArr.find( (val) => val === 5 ); // value
console.log(resultArr)

//findIndex() - retrun an index of value
const findIndex = findArr.findIndex( (val) => val === 5 );
console.log(findIndex)
