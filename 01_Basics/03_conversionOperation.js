let score = "33"

// console.log(typeof score)
// or console.log(typeof (score)) same

let valueInNumber = Number(score) // conversion
// console.log(typeof valueInNumber);

// "33" ==> 33
// "33abc" ==> Nan
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// " " => false
// "Akhtar" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

// ********************* Operations ****************************

let value = 3;
let negValue = -value
console.log(negValue)

// Arithmatic all perform

let str1 = "Hello"
let str2 = "Akhtar"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2) //12
// console.log(1 + "2") //12
// console.log("1" + 2 + 2) //122
// console.log(1 + 2 + "2") //32

console.log(true) // true
console.log(+true) // 1
console.log(+"") // 0