const user = {
    username: "Akhtar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this); // this current context or value ko access krta hai
    }
}
// user.welcomeMessage()
// user.username = "Intezar"
// user.welcomeMessage()

// console.log(this);

//  function chai(){
//     let username = "Akhtar"
//     console.log(this.username);
//  }

//  chai()

// const chai = function(){
//     let username = "Akhtar"
//     console.log(this.username);
// }

// chai()

const chai = () => {     //Arrow Function
    let username = "Akhtar"
    console.log(this.username);
} 

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  //impicit return 

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "akhtar"})
console.log(addTwo(4, 6))