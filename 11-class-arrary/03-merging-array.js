const schoolFriends = ["papi","sathi","boya"];

const classFriends = ["anil","seshi","Divya"];

/* 
three ways 

1.concat
2 ... (spread operator) // es6
3. for loop
*/
//concat
const friendLists = schoolFriends.concat(classFriends);
//console.log(friendLists);

// spread operator

const friends = [...schoolFriends,...classFriends];
//console.log(friends);

// for loop

let friendListData = [];

for( let current_index = 0; current_index < schoolFriends.length; current_index++ ){
    console.log(current_index);
    const data = schoolFriends[current_index];
    console.log(data);
    friendListData.push(data);
}

for( ele of classFriends ){
    friendListData.push(ele)
}


console.log(friendListData)


// index array 
//const schoolFriends = ["papi","sathi","boya"];
const findIndex = schoolFriends.indexOf("boya");
console.log(findIndex);

const convertArrayToString = schoolFriends.toString();
console.log(convertArrayToString,typeof(convertArrayToString));