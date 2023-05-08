"use strict";
class Counter {
    // constructor(counter:number){
    //     this.counter =counter
    // }
    static increment() {
        return (Counter.counter++);
    }
    static decrement() {
        return (Counter.counter--);
    }
}
const instance1 = new Counter();
const instance2 = new Counter();
// console.log(instance1.increment());
console.log(Counter.increment());
