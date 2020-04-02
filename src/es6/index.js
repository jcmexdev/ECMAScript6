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
