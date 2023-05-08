"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const colors2 = require("colors");
// colors2.enable()
require("colors");
function add(para1, para2) {
    if (typeof para1 === "number" && typeof para2 === "number") {
        return para1 + para2;
    }
    else {
        return para1.toString() + para2.toString();
    }
}
add("Zanku", "admin");
function getUser(user) {
    if ("role" in user) {
        return ` I am admin my role is ${user.name}`;
    }
    else {
        return ` I am a normal use ${user.name}`;
    }
}
const normalUser1 = { name: "Mr Gillu" };
const adminUser1 = { name: "Mr Tillu", role: "admin" };
console.log(getUser(normalUser1).green.bold);
console.log(getUser(adminUser1).green.bold);
class Animal2 {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log(` `);
    }
}
class Dog2 extends Animal2 {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log(` Kutta is barking`);
    }
}
class Cat2 extends Animal2 {
    constructor(name, species) {
        super(name, species);
    }
    makeMew() {
        console.log(`Bilai is Mew `);
    }
}
function getAnimals2(obj) {
    if (obj instanceof Dog2) {
        obj.makeBark();
    }
    else if (obj instanceof Cat2) {
        obj.makeMew();
    }
    else {
        obj.makeSound();
    }
}
const animal = new Dog2("German", "Dog");
console.log(getAnimals2(animal));
// console.log(colors2);
