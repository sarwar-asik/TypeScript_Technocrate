
const createArray =(param:string):string[]=>{
    return [param]
}

const createArray2 =<T> (params:T):T[] =>{
    return [params]
}

const result1 = createArray("funct1111")

const result2 = createArray2<string>("funct222")

const result3 = createArray2<boolean>(false)

interface CreateType {
    name:string,
    age:number
}
const result4= createArray2<CreateType>({name:"BD",age:20})

// with multiple parameter ///


const createArray3 =<X,Y> (params1:X,param2:Y):[X,Y] =>{
    return [params1,param2];
};

const result5 = createArray3<string,number>("Esmihan",22)

const result6  =createArray3<string,{name:string,roll:number}>("allu",{name:"",roll:33})



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
