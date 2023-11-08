// 1. Перевести @ на !

let str = `aaa@bbb@ccc`
console.log(str.replaceAll("@", "!"));

// 2. Сделать из HELLOWORLD в Hello World
let world = `HELLOWORLD`
world = world.charAt(0).toUpperCase() + world.slice(1).toLowerCase()
console.log(
world.slice(0, 5) + ` ` + world.slice(5) );


// 3. Из Hello it is Html сделать Hello it is not JS

let not = `Hello it is HTML`
console.log(not.slice(0, 11 ) +  ` not JS`);

// 4. Из alex сделать Alex
let name = `alex` 
console.log(name.charAt(0).toUpperCase() + name.slice(1));

// 5. Убрать запятую в Math.random()

let num = Math.random()
console.log(Math.round(num));

// 6. Сделать из Lex luter has a big, alex 

let big = `lex luter has a big`
console.log(
big.slice(big.search(`a`), big.search(`a`) +1) + 
big.slice(big.search(`lex`), big.search(`lex`) +3)
);