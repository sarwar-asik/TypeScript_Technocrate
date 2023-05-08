"use strict";
const vehicle = {
    name: "car",
    model: "BMW 220",
};
class Vehicle {
    constructor(names, brand, model) {
        this.names = names;
        this.brand = brand;
        this.model = model;
        // this.names=names
        // this.brand =brand;
        // this.model =model
    }
    test() {
        console.log("");
    }
    startEngine() {
        console.log("Start engine ");
    }
    stopEngine() {
        console.log("stop engine");
    }
    move() {
        console.log("move purpose");
    }
}
const vehicle5 = new Vehicle("car", "Toyota", "333");
console.log(vehicle5);
// another example ////
class VehicleClass {
    constructor(names, brand, model) {
        this.names = names;
        this.brand = brand;
        this.model = model;
        // this.names=names
        // this.brand =brand;
        // this.model =model
    }
    test() {
        console.log("");
    }
    move() {
        console.log("move purpose");
    }
}
class Car3 extends VehicleClass {
    startEngine() {
        console.log('this is start engine');
    }
    stopEngine() {
        console.log('this is stop engine');
    }
}
