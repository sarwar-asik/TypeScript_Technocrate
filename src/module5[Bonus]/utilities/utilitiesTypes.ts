

interface PersonType {
    name:string;
    email:string;
    contactName:number;
    location?:string
}

// PIck
type OnlyNameType =Pick <PersonType,"name">
type OnlyEmailType =Pick <PersonType,"email">
type OnlyContactType =Pick <PersonType,"contactName">
type detail =Pick <PersonType,"name"|"email">


// skip the property

type name = Omit<PersonType,"email"|"contactName">


// Partial and Required //


type OptionalDetails  = Partial<PersonType>

type RequiredDetails=Required<PersonType>


//Readonly///

const person13 :Readonly<PersonType>={
    name:"Allu",
    email:"allu@gmial.com",
    contactName:1722223930
}
// person3.contactName =22223


// type myObj ={
//     a:string,
//     b:string,
//     c:string
// }


// or ////

// Index signature ///

// type myObj ={
//     [key:string]:string

// }
// or //

// Record //
 
// type myObj =Record<string,string>
type myObj =Record<"a"|"b"|"c",string>
//  ** we declare property name by Record ***


const obj5 :myObj={
    a:"22",
    b:"33",
    c:"44"
}
