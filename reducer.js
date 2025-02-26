const reduce = (reducer, initial, arr) => {
    let acc = initial;
    for (let i = 0, {length: len} = arr; i < len; i++) {
        acc = reducer(acc, arr[i]);
    }
    return acc;
}

const doubleAndAdd = (acc, val) => {
    return (acc * 2) + val
}

const filter = (
    fn, arr
) => reduce (
    (acc, val) => fn(val) ? acc.concat([val]) : acc,
    [], arr
);

const result = reduce(doubleAndAdd, 1, [1,2,3])
console.log(result);
console.log(filter(v=> v > 1, [1,2,3]));