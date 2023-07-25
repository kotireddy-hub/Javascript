// multi line of string 
// es6
const topic = `Hello today 
i am teaching about 
es6 feature`;

console.log(topic)

//es5 

const es5Multi_line_string = 'Hello Today \n'
+'i am teching about \n'
+'es6 feature';
console.log(es5Multi_line_string)


// template literal
//coming string and variable 

//es6 
const firstName ="Koti";
const lastName = "reddy"
const welcome_message = `Hi welcome to javascript class ${firstName} ${lastName} Hello Today Seshi`;
console.log(welcome_message);

//es5
const es5_welcome_message = 'Hi welcome to javascript class '+firstName+' '+lastName+' Hello Today';
console.log(es5_welcome_message);

// Default parameters

function sum(a,b = 0){
    console.log(a,b);
return a + b;
};

const total = sum(3,4);
console.log(total)


// Destructuring Assignment

//arrays
const friendList = ["seshi","nari","anil"];
//normal
const f1 = friendList[0];
const f2 = friendList[1];
const f3 = friendList[2];
console.log(f1,f2,f3);

//es6
const [fr1,fr2,fr3] = friendList;
console.log(fr1,fr2,fr3);

// Object 
const person = {"name":"Koti","age":29};
//normal
const displayName = person.name;
const displayAge = person.age || 45;
console.log(displayAge,displayName);

//es6
const {name,age} = person;
console.log(name,age);




const userName = ["seshi","nari"];

let [user1,user2] = ["Koti","Anil"];
console.log(user1,user2);

let [newUser1,newUser2] = [user2,user1];
console.log(newUser1,newUser2);

// escaping 

const listArray = [30,40,50,60,70];
const [num1 = 35,num2,,,num5] = listArray;
console.log(num1,num2,num5);


// rest parameter 

const names = ["seshi","anil","koti","nari","Divya"];

const [userName1, userName2,...userNames] = names;

console.log(userName1,userName2,userNames);

const objRest = {
    "id":1,
    "name":"Koti",
    "empage":29,
    "company":"SAP"
};

const {id,name:Uname,...empDeatils} = objRest;

console.log(id,Uname,empDeatils,"Object rest");



// spread operator
// combined the two array or object

const friendList1 = ["nari","anil"];
const friendList2 = ["seshi","koti"];
const combinedFrs = [...friendList1,...friendList2];
console.log(combinedFrs);


const frndsObj1 = [
    {
        "name":"nari",
        "age":26
    },
    {
        "name":"Anil",
        "age":26
    }
];

const frndsObj2 = [
    {
        "name":"seshi",
        "age":29
    },
    {
        "name":"Divya",
        "age":29
    }
];

const newObj = [...frndsObj1,...frndsObj2];
console.log(newObj);



function getSize(...arg){
    return arg.length;
};

console.log(getSize(23,45,67,89,100));


// Enhanced Object Literals // es6

function getLaptop(Lname,Lmodel,Lyear){
  /*  return {
        "Name":Lname,
        "model":Lmodel,
        "year":Lyear
    }*/
    /* es5 
    return {
        "Lname":Lname,
        "Lmodel":Lmodel,
        "Lyear":Lyear
    }*/
    return {
        Lname,
        Lmodel,
        Lyear
    }
}

console.log(getLaptop("Dell","Del1243","2024"));

// array method // map filter reduce 
//map -> array object  name of the array or name id 


const data = [
    {
        "id":1,
        "name":"Koti"
    },
    {
        "id":2,
        "name":"Boya"
    },
    {
        "id":3,
        "name":"Anil"
    }
];

const empData = data.map((item) => item);
const empName = data.map((item) => item.id);
console.log(empData,empName);


// filter 
const filterEmp = data.filter(function(item){
    return item.id === 3
});
console.log(filterEmp);

//reduce call 

const arr = [1,2,3,4];

const sumValues = arr.reduce((acc,cur)=> acc + cur);
console.log(sumValues);


const ageGroup = [18,20,21,1,2,4,5,1,4,5,6,2];

let ageUniqueGroup = ageGroup.reduce(function(prv,cur){
    console.log(prv,":: ====",cur) // [] === 18 //[18] === 20
    if(prv.indexOf(cur) === -1){ // [].indexOf(18) === -1 // true  //[18].indexOf(20) === -1
        prv.push(cur); // [18] // [18,20]
    };
    return prv; // [18] // [18,20]
},[]);

console.log(ageUniqueGroup);


const people = [
    {
        name:"koti",
        age:30
    },
    {
        name:"Boye",
        age:30
    },
    {
        name:"Seshi",
        age:30
    },
    {
        name:"Anil",
        age:26
    },
    {
        name:"Anil",
        age:26
    }
];



const newPeople = people.reduce((prv,cur)=>{
    console.log(prv,cur,"::::");// {} == {koti,30} // {koti,30} //{boya,30}
    let name = cur.name;
    if(!(prv[name])){
        //prv.push(cur)
        console.log(prv,cur)
        prv = [] // {koti,30}
    }
   // prv[name].push(cur);
    return prv;
},[]);

console.log(newPeople,"::=======")

// filter method return a new array 


let array1 = [20,30,40,50,61];
let filterArray = array1.filter((item,index,array1)=>{
    console.log(item,"item");
    console.log(index,"index");
    console.log(array1,"array1");
    return item > 30;
});
console.log(filterArray,":====");

const mapFilter = array1.map((item)=>{ // array 
    return item > 30;
});

console.log(mapFilter);

const isOddArray = array1.filter((value)=>{
    return value % 2 !=0;
});
console.log(isOddArray);



let states = [
    {
        "name":"AP",
        "count":27
    },
    {
        "name":"TS",
        "count":31
    },
    {
        "name":"UP",
        "count":20
    },
    {
        "name":"Dehli",
        "count":20
    }
] // array of object
// {"name":""} // state.name
const stateCount = states.filter((state)=>{
   // console.log(state);
    return state.count === 20;
});

console.log(stateCount);


// reduce
/* (method) Array<any>.reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any (+2 overloads)
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.*/

//[].reduce();

const reduceArray = [1, 2, 34, 5];

const reduceSum = reduceArray.reduce((prv, cur) => {
    //console.log(prv,"===prv");
    //console.log(cur,"===cur");
    return prv + cur; //3+34//37+5//42
});

console.log(reduceSum);
const initialValue = 50

const passingInitialValueSum = reduceArray.reduce((prv, cur) => {
    console.log(prv, "===prv");
    console.log(cur, "===cur");
    return prv + cur
}, initialValue);

console.log(passingInitialValueSum);

const UsersList = [
    {
        name:"koti",
        age:30
    },
    {
        name:"Boya",
        age:30
    },
    {
        name:"Seshi",
        age:30
    },
    {
        name:"Anil",
        age:26
    }
];

const userAge = UsersList.reduce((prv,cur)=>{
    console.log(prv,":: === prv");
    console.log(cur,":: ===cur");

    return prv + cur.age;
},0);

console.log(userAge);

console.log("===========================================")
//[[],[],[]] => []
//[[1,2],[3,4],[5,6]] => [1,2,3,4,5,6]

const listOfArray = [[1,2],[3,4],[5,6]];
const filterOfArray = listOfArray.reduce((prv,cur)=>{
    console.log(prv,":: ==== prv");
    console.log(cur,": ==== cur");
    //return prv.concat(cur); // [1,2,3,4]
    return [...prv,...cur];
},[])
console.log(filterOfArray);
















