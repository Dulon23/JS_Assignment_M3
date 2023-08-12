/*
Create a JavaScript class named Animal with a constructor that takes two parameters: name and sound. 
The class should have a method named makeSound that logs the sound of the animal.
Next, create a subclass of Animal named Dog. The Dog class should have an additional method named fetch that logs "Fetching the ball
*/
class Animal {
  constructor(name, sound) {
      this.name = name;
      this.sound = sound;
  }
  makeSound() {
    console.log(this.sound);
  }
}
class Dog extends Animal {
  fetch() 
  {
    console.log("Fetching the ball!");
  }
}
const animal = new Animal("Lion", "Roar");
animal.makeSound();

var dog = new Dog("Buddy", "Woof");
dog.makeSound();
dog.fetch();
