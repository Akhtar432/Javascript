// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Akhtar"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if( true){
    const username = "Akhtar"
    if(username == "Akhtar"){
        const website = " google"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++  intresing  ++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}


// addTwo(5) //through error bcz funtion value ko ek variable me hole ho gya hai ye depend krta hai funtion ko declear krne pr

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));