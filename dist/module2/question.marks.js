"use strict";
// ternary operator 
var _a, _b;
const age = 19;
const isAdult = age >= 18 ? "adult person" : "cute baby";
console.log(isAdult);
const isAuthentic = "";
const userCheck1 = isAuthentic !== null && isAuthentic !== void 0 ? isAuthentic : "Not user";
const userCheck2 = isAuthentic ? isAuthentic : "Not User";
console.log({ userCheck1, userCheck2 });
const man1 = {
    names: "Mamun",
    age: 30,
    address: {
        city: "No City",
        road: "No Road"
    }
};
const home = (_b = (_a = man1 === null || man1 === void 0 ? void 0 : man1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No Home";
console.log({ home });
