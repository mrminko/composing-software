const compose = (f, g) => x => f(g(x))

const addOne = x => x + 1;
const double = x => x * 2;

const result = compose(addOne, double)(10)
console.log(result);

const composeMany = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
console.log(composeMany(double, addOne)(20));