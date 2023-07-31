// [koti,seshi,anil,nari] // [ {"name":"koti","id":1},{"name":"seshi","id":2}]

//[].map() 

const friendList = ["koti","seshi","nari","anil"];

const addingMapMethod = friendList.map((value,index)=>{
    console.log(value);
    console.log(index);
    return {"id":index + 1,"name":value}
});

console.log(addingMapMethod);

const UsersList = [
    {
        "name":"Koti",
        "age":30
    },
    {
        "name":"Seshi",
        "age":30
    },
    {
        "name":"Anil",
        "age":26
    },
    {
        "name":"Nari",
        "age":26
    }
];

const BirthYearComibedUserList = UsersList.map((user)=>{
    console.log(user,":: user");
    const {name,age} = user;
    return {
        "name":name,
        "birthYear":new Date().getFullYear() - age,
        "age":age
    }
});

console.log(BirthYearComibedUserList);

// {"koti":"30","seshi":"30"}

const newObj = UsersList.reduce((prv,cur)=>{
    prv[cur.name] = cur.age;
    return prv;
},{});

console.log(newObj)

const arrNewObj = UsersList.reduce((prv,cur)=>{
    prv.push({
        "name":cur.name,
        "birthYear":new Date().getFullYear() - cur.age,
        "age":cur.age
    });
    return prv;
},[]);

console.log(arrNewObj);

//// [{"koti":30},{"seshi":30}]

const Users = [
    {
        "name":"Koti",
        "age":30
    },
    {
        "name":"Seshi",
        "age":30
    },
    {
        "name":"Anil",
        "age":26
    },
    {
        "name":"Nari",
        "age":26
    }
];


const usingMapwithcombinedAgeAndName = Users.map((user)=>{
    console.log(user,":: ====");
    const newObj = {};
    newObj[user.name] = user.age;
    return newObj;
});

console.log(usingMapwithcombinedAgeAndName);

const usingReduce = Users.reduce((prv,cur)=>{
    //pop - last remove
    // push - last insert 
    // shift - frist remove
    // unshift - first insert 
    prv.push({[cur.name]:cur.age});
    return prv;
},[]);

console.log(usingReduce,"::: === usingReduce")