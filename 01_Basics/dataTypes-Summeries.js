// Primitive datatype

// 7 Types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')
console.log(id === anotherId) // false

const bigNumber = 23658123762367893n


// Non-Primitive ( Referance )

// Array, objects, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Akhtar",
    age: 22
}

const myFunction = function(){
    console.log("Hello Duniya");
}

// ********************************************

// stack ( store primitive data)  Heap (Store non-premitive data)

let myYoutbename = "akhtardotcom"

let anothername = myYoutbename
anothername = "codeWithAkhtar"

console.log(myYoutbename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@gmail.com"

console.log(userOne.eamai)
console.log(userTwo.email)