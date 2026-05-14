
//task 1
const productos = [
    {ide : 1, name : "compu", precio : 15000},
    {ide : 2, name : "compu", precio : 15000},
    {ide : 3, name : "compu", precio : 15000},
];

console.log(productos);
console.log("---------------------------");

// taks 2
const list = [1,2,2,4,5,5,7,9,9]

let mySet = new Set(list);
console.log(mySet);
console.log("---------------------------");

mySet.add(10);
console.log(mySet);

console.log("existe numero 3?",mySet[3])

mySet.delete(3)
console.log(mySet);
console.log("---------------------------");


