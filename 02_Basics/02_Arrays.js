const marvelHeros = ["thor", "Ironman", "Spiderman"]
const dc_Heros = ["superman", "flash", "batman"]

// marvelHeros.push(dc_Heros)

// console.log(marvelHeros)
// console.log(marvelHeros[3][1]) // Bad Practice

// const allHeros =  marvelHeros.concat(dc_Heros)
// console.log(allHeros)
 
const all_new_heros = [...marvelHeros, ...dc_Heros] // sprade hota hai 

// console.log(all_new_heros);

// const another_array = [1,2,3, [4,5,6], 7, [6, 7, [4,5]]]

// const real_another_array = another_array.flat(1) // aur nhi pata ho to infinity use kar sakte hai.
// console.log(real_another_array)


// console.log(Array.isArray("Akhtar"))
// console.log(Array.from("Akhtar"))
// console.log(Array.from({name: "Akhtar"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) 