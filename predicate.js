//Predicate is a function which returns a boolean value
const gte = cutoff => n => n > cutoff;
const arr = [1,2,3,4,5,6,7,8];
console.log(arr.filter(gte(4)));