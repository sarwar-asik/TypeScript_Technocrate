
interface Model <TData,TMethod>{
    data:TData;
    method:TMethod
}

interface IUser5{
    firstName:string,
    lastName:string,

}


interface IMethod{
  fullName():string
}

type model =Model<IUser5,IMethod>


class User99 implements model{
    data:IUser5;
    method: IMethod;
    constructor(firstName:string,lastName:string){
      this.data = {firstName,lastName}
      this.method ={
        fullName() {
            return `$fullName + LastName`
        },
      }
    }

}


const user10 = new User99("tinku","Janku")