/// type is dependent  on another file ////


type a1 = null ;
type a3 = undefined;
type a4 = number
type a2 = a1 extends string ? string :null

type conditionOne = a1 extends null? null : a3 extends number ? number :a4 extends string ?string : never ;

type Shekh ={
    wife1:string,
    wife2:string
}

type CheckProperty <T,K> = K extends keyof Shekh ?true :false

type CheckWIfe = CheckProperty<Shekh,"wife2">


type MyFriends = "Raju"| "Saju" | "Tajul" |"sohel"

type RemoveFriend <T,K> = T extends K ? never : T

type TrueFriends = RemoveFriend<MyFriends,"Tajul">





