"use strict";
const colors = require("colors");
console.log("null ........");
const SearchName = (value) => {
    if (value === null) {
        console.log("it is null");
    }
    else {
        console.log("It is not null");
    }
};
SearchName(null);
const CarSpeed = (speeds) => {
};
CarSpeed(20);
CarSpeed("20 jas ");
function throwError(message) {
    throw new Error(message);
}
throwError("New error throw kortesi");
