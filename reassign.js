const obj = {
    foo: "bar",
    fee: "nyar"
}

const {foo: bazz}= obj //assign obj.foo as bazz
const {fee: bizz}= obj

console.log(bazz)
console.log(bizz)

const double = (x, y=0) => x * 2;
console.log(double.length)