function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("H");
    console.log("T");
    console.log("A");
    console.log("R");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(3 , 4)
// console.log("Result: " , result)

function logingUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return '${username}, just loggesd in'
}

// console.log(logingUserMessage("Akhtar"))
// console.log(logingUserMessage())

function calculateCartPrize(...num1){
    return num1
}

console.log(calculateCartPrize(200, 300, 400, 500))

const user = {
    username: "Akhtar",
    prize: 199
}

function handleObject(anyobject){
    console.log('Username is ${anyobject.username} and prize is ${anyobject.prize}');
}

// handleObject(user)\

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))