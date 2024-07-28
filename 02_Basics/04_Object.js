//  const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isloggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@hmail.com",
    fullname:{
        userfullname:{
            firstname: "Intezar",
            lastname: "Akhtar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {obj1,obj2}
const obj5 = Object.assign({}, obj1, obj2, obj3)  // pass traget ->  {}, source -> object
const obj6 = {...obj1, ...obj2, ...obj3}  // sprade

// console.log(obj4)
// console.log(obj5)
// console.log(obj6)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "ht@gmail.com"
    },
    {
        id: 3,
        email: "htt@gmail.com"
    }
]

// console.log(users[1].email)

// print keys or values

console.log(Object.keys(tinderUser))  // datatype array me print hoga bahut hi important hai
console.log(Object.values(tinderUser)) // isme ham loop ka bhi use kr sakte hai database use krne me.
console.log(Object.entries(tinderUser)) // very less use entries.

console.log(tinderUser.hasOwnProperty('isloggedIn'))