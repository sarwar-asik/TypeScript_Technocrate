
// use default value in las para in function //
function adding2(num1:number,num2:number =20):number{
    return num1 + num2
}

adding2(5)
////****** see  console.log()  */
///// npx ts-node-dev --respawn src/spread.default.ts //

const myFriends  =[ "bindu","diku","piku"]
const newFriends  =[ "tttt","ffff","eeff"]

myFriends.push(...newFriends)

const bestFriends  = (frnd1:string,frnd2:string,frnd3:string):void =>console.log(`my best are ${frnd1} , ${frnd2} ${frnd3}`);

bestFriends("azgor","razib","proholladssss")


