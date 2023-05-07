"use strict";
let hudai;
hudai = "Next level development";
hudai.length;
function kgToGram(params) {
    if (typeof params === "string") {
        const value = parseFloat(params) * 1000;
        return `the converted value is ${value} gram`;
    }
    if (typeof params === "number") {
        const value = params * 1000;
        return value;
    }
}
const resultNUmber = kgToGram(10000);
// or 
const resultNUmbers = kgToGram(10000);
const resultToString = kgToGram("10000");
console.log({ resultNUmber, resultToString });
