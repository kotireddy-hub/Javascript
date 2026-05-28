const companyName = [
    {
        name:'HCL',
        year:'2015',
        level:'l5'
    },
    {
        name:'Infosys',
        year:'2014',
        level:'l5'
    },
    {
        name:'TCS',
        year:'2010',
        level:'l5'
    },
    {
        name:'ADP',
        year:'2010',
        level:'l3'
    }
]

const namesArr = companyName.map( (obj) =>  obj.name);

//filter

const filterArr = companyName.filter ( (obj) => obj.level ==='l5'  )

console.log(namesArr)
console.log(filterArr)

const users = [
    {
        name:'Hi',
        age: 20,
    },
    {
        name:'Hello',
        age: 20,
    },
    {
        name:'Welcom',
        age: 20,
    },
]

const userNames = users.map( (user) => user.name );

console.log(userNames)
//array.map( (value, index, arry) => { // code here} )

const newMapArr = users.map( (value, index, users) => {
   return {
       value,
       index,
       users
   } 
});

console.log(newMapArr)
/* const users = {
    name:'test',
    age:20,
    company:'TCS'
}

const el = {
        name:'TCS',
        year:'2010',
        level:'l3'
    }
users.name

// const arr = [1,2,3,4,5] // 0, 1,2,3,4 = arr [0]
*/
