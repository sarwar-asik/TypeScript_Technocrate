"use strict";
const createArray = (param) => {
    return [param];
};
const createArray2 = (params) => {
    return [params];
};
const result1 = createArray("funct1111");
const result2 = createArray2("funct222");
const result3 = createArray2(false);
const result4 = createArray2({ name: "BD", age: 20 });
// with multiple parameter ///
const createArray3 = (params1, param2) => {
    return [params1, param2];
};
const result5 = createArray3("Esmihan", 22);
const result6 = createArray3("allu", { name: "", roll: 33 });
// const cruss ="w kathrina"
// const myInfo ={
//     name:"Evantu",
//     age:200,
//     salary:3000
// }
// // const newInfo ={...myInfo}
// const IandCruss =<T>(myInfo:T)=>{
//     const crush = "www kate"
//     const newData ={...myInfo,crush}
//     return newData
// }
// const result7= IandCruss(myInfo)
// // result7.age
