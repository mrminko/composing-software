const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)
const trace = label => value => {
    console.log(`${label}: ${value}`);
    return value;
}
const addOne = x => x + 1;
const double = x => x * 2;

const result = pipe(addOne, trace("after addOne"), double, trace("after double"))(10);
