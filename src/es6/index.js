function newFunction(name, age, country) {
  var name = name || 'default';
  var age = age || 25;
  var country = country || 'MX';
  console.log(name, age, country);
}

//es6
function newFunction2(name = 'default', age = 25, country = 'MX') {
  console.log(name, age, country);
}

newFunction();
newFunction2();

//template literals
let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//multiline
let lorem =
  'Lorem ipsum dolor, sit amet consectetur adipisicing \n' +
  'una frase epica de este lado';

let lorem2 = `Lorem ipsum dolor, sit amet consectetur adipisicing 
  la misma frase más epica en es6`;

console.log(lorem);
console.log(lorem2);

//DESTRUCTURING
let person = {
  name: 'juan',
  age: 25,
  country: 'MX'
};
console.log(person.name, person.age, person.country);
let { name, age, country } = person;
console.log(name, age, country);

//OPERADOR DE PROPAGACIÓN  SPREAD OPERATOR
let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'yesica', 'camila'];
let education = ['david', ...team1, ...team2];
console.log(education);
//output
// [
//   'david',   'oscar',
//   'julian',  'ricardo',
//   'valeria', 'yesica',
//   'camila'
// ]

//let y const en vez de var
//let y const tienen scope de bloque
{
  var global = 'Global var';
}
{
  let globalLet = 'Global let';
}
console.log(global);
console.log(globalLet);
const a = 'b';
a = 'a'; //esto no es permitido porque es una constante

//parámetros en objetos
//es5
let name = 'juan';
let age = 25;
obj = { name: name, age: age };
//es6
obj2 = { name, age };

//arrow functions o funciones flecha
const names = [
  { name: 'Juan', age: 41 },
  { name: 'Carlos', age: 45 }
];
console.log('ES5');
const listOfNames = names.map(function(item) {
  console.log(item.name);
});
console.log('ES6');
const listOfNames2 = names.map(item => console.log(item.name));

//promises
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Hey');
  } else {
    reject('Ups!!');
  }
});

myPromise
  .then(response => console.log(response))
  .catch(error => console.log(error));
