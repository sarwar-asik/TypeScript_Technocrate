type PersonsType ={
    name:string,
    age:string,
    address:string
}


type newType ="name"|"age"|"address" ///manually  ///

type NewType =keyof PersonsType

const a:newType = "address"
const b:NewType = "address"


function getProperty<X,Y extends keyof X> (obj:X,key:Y){
obj[key]
}

console.log(getProperty({name:"Mr. X",age:30},"age"));