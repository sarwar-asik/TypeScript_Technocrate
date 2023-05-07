const numberArray = [1, 2, 3];
const stringArray = numberArray.map((num) => num.toString());

console.log(stringArray, "string");

type AreaString = {
  height: string;
  width: string;
};

type AreaNumber = {
  height: number;
  width: number;
};
type VolumeType = {
  height: number;
  width: string;
  depth:number
};

type Area<T> ={
    // [key in keyof VolumeType] : string
    // [key in keyof VolumeType] : VolumeType[key]
   readonly [keysss in   keyof T] :T[keysss]
}

const area2 :Area<{name:string,width:number,height:number,depth:boolean}> ={
    name:"Volume count",
    width:20,
    height:30,
    depth:true
}

type AreaReadOnly = {
 readonly height: number;
 readonly width: number;
};

const rectangleArea: AreaReadOnly = {
  height: 20,
  width: 30,
};
