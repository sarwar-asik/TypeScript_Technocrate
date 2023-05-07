import "colors";

class BankAccount {
  id: number;
  name: string;
  balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
}

const myAccount = new BankAccount(444, "Germany", 44);
console.log(myAccount );
