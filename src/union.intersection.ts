type FrontDeveloper ={
    name:string,
    design:string
}

type BackendDeveloper  = FrontDeveloper &{
    name:string,
    expertise:string,
    experience:string,
    server:string,
    language:string
}



const fullStack :FrontDeveloper | BackendDeveloper ={
   name:"SARWAR",
   design:"React ",
   server:""

}
type FullstackDeveloper ={
    front:string,

}
enum Level {
    junior ='JUNIOR',
    mid="Mid",
    senior="Senior"
}

type NextLevelDeveloper =FullstackDeveloper & {
    newTech:string
    level:Level
}

const developer :NextLevelDeveloper={
 front:"CSS " || "tailwind",
 newTech:"Redux" || "typeScript",
 level:Level.senior
} 