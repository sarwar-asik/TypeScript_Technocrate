"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    get balance2() {
        return this.balance;
    }
    set deposit(amount) {
        this.balance = this.balance + amount;
    }
}
class StudentAccount {
}
const myAccount = new BankAccount(444, "Germany", 44);
// myAccount.balance = 0;
myAccount.getBalance();
// console.log(myAccount);
console.log(myAccount.getBalance());
myAccount.deposit = 300;
console.log(myAccount.balance2, "balance");
