let a = 2;
// let a = 3;
const b = 3;
// const b = 4;
var c = 5;
var c = 6; //permit redeclaration
console.log(c);

c = c + 1;
console.log(c);

const nums = {a,b,c}
console.log(nums);

const name = "mgmg";
const age = 21;
const student = {name, age};
console.log(student);

const combine = {...nums, ...student};
const combine1 = Object.assign({}, nums, student);
console.log(combine1);
