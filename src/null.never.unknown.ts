const colors = require("colors")

console.log("null ........")
const SearchName  =(value:string |null)=>{
    if(value=== null){
        console.log("it is null")
    }
    else{
        console.log("It is not null")
    }
}

SearchName(null)

const CarSpeed =(speeds:unknown)=>{


}


CarSpeed(20)
CarSpeed("20 jas ")


function throwError(message:string):never{
    throw new Error(message)
}

throwError("New error throw kortesi")
