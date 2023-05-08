"use strict";
class Animal {
    //  public name: string;
    //   public specious: string;
    //  public sound: string;
    //   you have to use constructor for a class method '
    constructor(name, specious, sound) {
        this.name = name;
        this.specious = specious;
        this.sound = sound;
        // this.name = name;
        // this.sound = sound;
        // this.specious = specious;
    }
    //   
    makeSound() {
        console.log(` The ${this.name} is  says ${this.sound}`);
    }
}
const dog = new Animal("Germany ", "Kuttha", "Gew Gew");
const cat = new Animal("Persian", "Cat", "mew");
dog.makeSound();
cat.makeSound();
