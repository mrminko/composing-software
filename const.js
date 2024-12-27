"use strict";
const immutable = 1;
// immutable = 2 //type error

const obj = {name: "mgmg"};
obj.name = "bamg" //mutable

Object.freeze(obj); //one-level freeze
obj.name = "hlahla"; //doesn't work or throw error in strict mode

console.log(immutable);
console.log(obj);