// ternary operator 

const age :number = 19 ;

const isAdult = age>= 18?"adult person":"cute baby"
console.log(isAdult);

const isAuthentic = ""
const userCheck1 = isAuthentic ??  "Not user"
const userCheck2  = isAuthentic? isAuthentic:"Not User"

console.log({userCheck1,userCheck2})


type Human ={
    names:string,
    age:number,
    address:{
        city:"No City",
        road:"No Road",
        home?:""
    }
}

const man1 :Human ={
    names:"Mamun",
    age:30,
    address:{
        city:"No City",
        road:"No Road"
    }

}

const home = man1?.address?.home ?? "No Home"

console.log({home});
