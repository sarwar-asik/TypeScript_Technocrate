// **********  change "noImplicitAny": false,  in tsconfig.ts *******


function adding(num1:number,num2:number):number{
    return num1 + num2
}

adding(5,2)

const myArrow  =(num1:number,num2:number):number =>{
    return num1 +num2
}


const numberRoll =[10,11,12,13,222]

const getRoll = numberRoll.map((roll:number)=>roll+roll)


const person:{
    name:string,
    balance:number,
    addBalance(money:number):number,
    detail(money:number):void
} ={
    name :"Mezba vai",
    balance :10000,
    addBalance (money:number){
        return this.balance + money
    },
    detail(money:number){
        return console.log(` He has only ${money} taka`)
    }
}

