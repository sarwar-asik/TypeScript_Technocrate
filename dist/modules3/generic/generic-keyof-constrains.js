"use strict";
const a = "address";
const b = "address";
function getProperty(obj, key) {
    obj[key];
}
console.log(getProperty({ name: "Mr. X", age: 30 }, "age"));
