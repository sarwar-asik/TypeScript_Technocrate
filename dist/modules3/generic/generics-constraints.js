"use strict";
const cruss = "w kathrina";
// const newInfo ={...myInfo}
// *****  use extends is most important ******
const myInfo = {
    name: "Evantu",
    age: 200,
    salary: 3000
};
const IandCruss = (myInfo) => {
    const crush = "www kate";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result8 = IandCruss(myInfo);
const result9 = IandCruss({ name: "", age: 22, salary: 3000 });
// result8.age
