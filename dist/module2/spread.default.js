"use strict";
// use default value in las para in function //
function adding2(num1, num2 = 20) {
    return num1 + num2;
}
adding2(5);
////****** see  console.log()  */
///// npx ts-node-dev --respawn src/spread.default.ts //
const myFriends = ["bindu", "diku", "piku"];
const newFriends = ["tttt", "ffff", "eeff"];
myFriends.push(...newFriends);
const bestFriends = (frnd1, frnd2, frnd3) => console.log(`my best are ${frnd1} , ${frnd2} ${frnd3}`);
bestFriends("azgor", "razib", "proholladssss");
