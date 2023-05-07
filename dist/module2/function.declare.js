"use strict";
// **********  change "noImplicitAny": false,  in tsconfig.ts *******
function adding(num1, num2) {
    return num1 + num2;
}
adding(5, 2);
const myArrow = (num1, num2) => {
    return num1 + num2;
};
const numberRoll = [10, 11, 12, 13, 222];
const getRoll = numberRoll.map((roll) => roll + roll);
const person = {
    name: "Mezba vai",
    balance: 10000,
    addBalance(money) {
        return this.balance + money;
    },
    detail(money) {
        return console.log(` He has only ${money} taka`);
    }
};
