let score = "33"

console.log(typeof score)
// or console.log(typeof (score)) same

let valueInNumber = Number(score) // conversion
console.log(typeof valueInNumber);

// "33" ==> 33
// "33abc" ==> Nan
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// " " => false
// "Akhtar" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)