const double1 = n => n * 2;
const double2 = n => n.point * 2;

const factory = (func, functor) => functor.map(func);

const doubleArray = factory(double1, [2,3,4])
const doubleObj = factory(double2, [
    {name: "mgmg", point: 20},
    {name: "aungaung", point: 25}
])

console.log(doubleArray);
console.log(doubleObj);
