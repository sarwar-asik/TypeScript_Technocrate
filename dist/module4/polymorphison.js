"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
class Person2 {
    takeNap() {
        console.log(" I am sleeping 6 hours a day");
    }
}
class Student3 extends Person2 {
    takeNap() {
        console.log(" I am sleeping 16 hours a day");
    }
}
class Developer extends Person2 {
    takeNap() {
        console.log(" I am sleeping 5 hours a day");
    }
}
function getNaps(params) {
    params.takeNap();
}
const person2 = new Person2();
const person3 = new Student3();
const person4 = new Developer();
getNaps(person2);
getNaps(person3);
getNaps(person4);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.height;
    }
}
function getArea2(params) {
    console.log(params.getArea());
}
getArea2(new Circle(33));
getArea2(new Rectangle(33, 11));
