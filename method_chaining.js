const gte = cutoff => n => n > cutoff;
const double = n => n * 2;
const arr = [1,2,3,4,5,6,7,8];
const result = arr.filter(gte(4)).map(double);
console.log(result);