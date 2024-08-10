 // singaltone
// object.create

 //object literal

const mySmb = Symbol("Key1")

 const JsUser = {
    "full name": "Intezar Akhtar",
    [mySmb]: "myKey1",
    name: "Akhtar",
    age: 18,
    location: "jaipur",
    email: "intezarakhtar@gmail.com",
    isLoggedIn: false,
    lastLogingDays: ["Monday", "Saturday"]
 }

//  console.log(JsUser.email)
//  console.log(JsUser["email"]) //same as line 16
//  console.log(JsUser["full name"])
//  console.log(typeof JsUser[mySmb])

 // change object

 JsUser.email = "intezar@chatgpt.com"
//  Object.freeze(JsUser)
 JsUser.email = "akhtar@microsoft.com"
//  console.log(JsUser)

JsUser.greeting =  function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo =  function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())