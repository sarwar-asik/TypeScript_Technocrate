
const cruss ="w kathrina"

interface MyInfoType {
    name:string,
    age:number,
    married?:boolean,
    salary:number
}


// const newInfo ={...myInfo}

// *****  use extends is most important ******


const myInfo :MyInfoType={
    name:"Evantu",
    age:200,
    salary:3000
}

const IandCruss =<T extends MyInfoType>(myInfo:T)=>{
    const crush = "www kate"
    const newData ={...myInfo,crush}
    return newData
}

const result8= IandCruss<MyInfoType>(myInfo)

const result9= IandCruss({name:"",age:22,salary:3000})
// result8.age
