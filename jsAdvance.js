//arrow function
//array methods
//destruncturing
//spread and rest
//import export
//async await / promise
//objects
//Ternay
// Short Curcuiting
// Nullish Coalscing

//arrow functions
// const add = (a,b) => a + b;
// console.log(add(2,3));

// const getFullName = (myName, age) => {
//     return({
//         userName : myName,
//         userAge: age,
//     })
// }
// let obj = getFullName("Maanshu", 24);
// console.log(obj);

//array methods
//map
//filter
//reduce
//find
//some

//Map Method

// const dataArr = [
//     {
//         id: 1,
//         userName: "Sudhanshu",
//         age: 29
//     },
//     {
//         id: 2,
//         userName: "Faizy",
//         age: 24
//     },
//     {
//         id: 3,
//         userName: "Udit",
//         age: 91
//     },
// ]

//const usrNameArr = dataArr.map(item => item.age);
//arr.whatMethod(item, index, array)

//reduce
// const arr = [1,2,3,4,5,6,7,8];
// let sum = arr.reduce((prev,curr) => prev + curr, 5);
// console.log(sum);

//filter
// const arr = [1,2,3,4,5,6,7,8];
// const filteredArr = arr.filter(value => {
//     if(value > 4) {
//         return value;
//     } else if( value < 3) {
//         return value;
//     }
// });
// console.log(filteredArr);

//find
// const findChotu = [1, 2, 3 , 4];
// const milaChotu = findChotu.some(val => val % 2 === 0);
// console.log(milaChotu);

//Destructring
// const [a,b,c,d] = [1,2,3]; //array destructring

// const data = {
//     fName: "Sudhanshu",
//     lName: "Singh",
//     age: 23,
//     male: true
// };
// const {fName, age} = data;
// console.log(fName);

//Spread
//  const arr = [1,2,3,4,5,67,6];
//  console.log(...arr)

// const data = {
//     fName: "Sudhanshu",
//     lName: "Singh",
//     age: 23,
//     male: true
// };
// const newObj = {
//     ...data,
//     fName: "Faizy",
//     lName: "Khan",
// }

// console.log(newObj);

//Rest
// const [[...a], ...c] = [[1,2],3,4,5]

// const evenNum = [2,4,6,8,9];
// import {days, months} from "./modules/calender.js";
 
//  const addSum = new Sum(2,3);
//  console.log(addSum.add(2,3));
//  console.log(days, months, add(3,4));

// import defaultByNature from  "./modules/calender.js";
// console.log(adasdasdasdasdasdasdasdasdasdasdasdasdsa);
// console.log(days, months);

//Promises

const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        let a = 1;
        if(a > 2) {
            res("Its greater");
        }
            rej("its smaller");
    },3000)
})
//myPromise.then(res => console.log(res), rej => console.log(rej)); //then first cb arg is for res and second arg is for rej
myPromise.then(res => console.log(res)).catch(err => console.log(err)); // catch is same as second arg for rej but without handling res
//Promise - Async
// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(res => res.json())
// .then(data => data.map(item => console.log(item.title)));

// const getData = async() => {
//     try{
//         const res = await fetch(`https://jsonplaceholder.typicode.com/postssssss`);
//         console.log(res);
//         if(!res.ok && res.status === 404) throw new Error("Error shows up");
//         const json = await res.json();
//         await json.map(item => console.log(item.title));
//     } catch(err) {
//         console.error(err);
//     }
// }

// getData();

// // null / undefined
// const foo = null ?? 'default string';
// console.log(foo);

// function sum(a,b = 2){
//     return a + b;
// }

// console.log(5);

// const pet = {
//     name: "bruno",
//     type: "dog",
//     getSound(){
//         console.log("Barks");
//     },
//     parents: {
//         name: "briyo",
//         type: "dog",
//         gender: "male",
//         breed: "chihuahua"
//     }
// }
// // let getParent = pet.parents && pet.parents.name; // long method
// let getParent = pet.parents?.name // optional chaining
// console.log(getParent);

//set and map
// const item = new Map();
// item.set('food', ['lazania', 'bread', 'tandoori roti', 'chicken curry'])
//     .set('type', ['veg', 'non-veg', 'beverages'])
//     .set('location', 'Greaeter Noida')

// console.log(item.get('food'));

//Delete operator - Object does not have delete in its prototype so we should use delete operator to delete its own property
// const myObj = {
//     myName: "Sudhanshu",
//     age: 29
// }

// delete(myObj.age);
// console.log(myObj);

//Object
// const testObj = Object(); // Create empty object
// console.log(testObj);
//Object.assign()
// const obj1 = {a : 1, b: 2};
// const obj2 = {c: 3, b: 4};

// const targetObj = Object.assign(obj1, obj2); // obj1 is target, obj2 is source, obj1 is returned
// console.log(targetObj); //it will be same as obj1 as obj1 is returned
// console.log(obj1);

//Shallow vs deep cloning

//Shallow Copy
// const a = {a : 1, b: 2};
// const b = a;
// a.b = 3;
// console.log(b);

// const myObj = {a: 1, b: 2};
// const newObj = Object.assign({}, myObj);
// myObj.b = 4;
// console.log(newObj);

//Deep Copy
// const objOnly = {a: 2, b: 3};
// const objDeep = JSON.parse(JSON.stringify(objOnly));
// console.log(objDeep);

//Object.entries

// const dataObj = {
//     menu: ['lazania', 'bread', 'tandoori roti', 'chicken curry'],
//     type: ['veg', 'non-veg', 'beverages'],
//     timings : "9 - 12",
// }

// const a = Object.entries(dataObj); // returns array with key to b at index 0 and value to be at index 1
// console.log(a);
// 0: (2) ['menu', Array(4)]
// 1: (2) ['type', Array(3)]
// 2: (2) ['timings', '9 - 12']
// length: 3
//[key, value] destructures above return statement
// for(const [key, value] of a){
//     console.log(`${key} - ${value}`);
// }
//Object.definedProperties()
// const obj = {};
// Object.defineProperties(obj, {
//     property: {
//         value: 42,
//         writable: true
//     }
// })
// console.log(obj);
//Object.formEnteries() - creates an object
// const newMap = new Map();
// newMap.set('name', 'sudhanshu');
// newMap.set('age', 12);
// newMap.set('male', true);
// const obj = Object.fromEntries(newMap);
// console.log(obj);