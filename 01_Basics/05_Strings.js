const name = "Akhtar"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log('Hello My Name is ${name} and my repoCount is ${repoCount}');

const gameName = new String ('hiteshtcs')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('4'));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringone = "   Akhtar   ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "htpp://intezarakhtar@gmail.com/akhtar%20ansari"
console.log(url.replace('%20', '-'))
console.log(url.includes('ali'))