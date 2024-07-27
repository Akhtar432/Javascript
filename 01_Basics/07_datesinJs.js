// Dates

let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
// console.log(myDate.getTimezoneOffset())

// console.log(typeof myDate) // object

// let creatDate = new Date ( 2024 , 0 , 27)
// let creatDate = new Date ( 2024 , 0 , 27 , 5 , 3)
// let creatDate = new Date ("2024-01-27")
let creatDate = new Date ("01-14-2024")
// console.log(creatDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDate.getTime())

// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() +1)
// console.log(newDate.getDay())

// ' ${newDate.getDay()} and the time '

newDate.toLocaleString('default',{
    weekday: "long",
    
})