
type CrusType={
    name:string,
    age?:number,
    profession:string,
    address:string,
    homeAddress?:string
}

const crush1:CrusType={
    name:"Tinisa",
    age:22,
    profession:"Developer",
    address:"Dhaka"
}

const crush2:CrusType ={
    name:"Pinia",
    // age:22,
    profession:"actress",
    address:"chtg"

}

type CrushMarriedType = boolean ;

const isCrushMarried :CrushMarriedType = false ;


type CourseNameType =string ;

const CourseName:CourseNameType ="Next Level web Development"  ;


type OperationType = (x:number,y:number) =>number

const calculate =(nums1:number,nums2:number,operation:OperationType)=>{
    return operation(nums1,nums2)
}

calculate(10,20,(x,y)=>x+y)
calculate(10,20,(x,y)=>x-y)