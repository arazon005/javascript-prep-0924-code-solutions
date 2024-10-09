// create your loops here.
function whileLoop1() {
  let number = 0;
  let numberArray = [];
  while (number < 10) {
    numberArray.push(number);
    number += 1;
  }
  return numberArray;
}
console.log(whileLoop1());

function whileLoop2() {
  let number = 0;
  let numberArray = [];
  while (number < 20) {
    numberArray.push(number);
    number += 2;
  }
  return numberArray;
}
console.log(whileLoop2());

function forLoop1() {
  let numberArray = [];
  for (let num = numberArray.length; num < 10; num++) {
    numberArray.push(num);
  }
  return numberArray;
}
console.log(forLoop1());

function forLoop2() {
  for (let num = 100; num > 0; num--) {
    console.log('Time until explosion: ' + num);
  }
}
forLoop2();

const person = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
function forInLoop1(object) {
  let array1 = [];
  for (const key in object) {
    array1.push(key);
  }
  return array1;
}
console.log(forInLoop1(person));

function forInLoop2(object) {
  let array1 = [];
  for (const key in object) {
    array1.push(object[key]);
  }
  return array1;
}
console.log(forInLoop2(person));
