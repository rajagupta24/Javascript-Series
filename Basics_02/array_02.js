const marvel_heroes = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flask", "batman"];

// marvel_heroes.push(dc_heros);
// console.log(marvel_heroes);

// One way to do concatenation
// const allHeros = marvel_heroes.concat(dc_heros);
// console.log(allHeros);

// Another way to do concatenation -> Here we concat more than two array
// const myallHeroes = [...marvel_heroes, ...dc_heros];
// console.log(myallHeroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9]]];
const real_another_array = another_array.flat(Infinity); //->This method simple covert subarray into one single array.
// console.log(real_another_array);

// console.log(Array.isArray("Raja")); //false
// console.log(Array.from("Raja"));
// console.log(Array.from({name: "Raja"})); // Output :- []  //Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
