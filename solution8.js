/*
Create a JavaScript class named Person with a constructor that takes two parameters: name and age. 
The class should have a method named introduce that logs a greeting message including the person's name and age.
Next, create a subclass of Person named Student. The Student class should have an additional property named major 
and an overridden introduce method. The overridden introduce method should log a message that includes the person's name, age, and major.
*/
    
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    introduce() {
      console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
  //create sub class
  class Student extends Person {
    constructor(name, age, major) {
      super(name, age);
      this.major = major;
    }
    introduce() {
      console.log(`Hello, I'm ${this.name}, I'm ${this.age} years old, and I'm majoring in ${this.major}.`);
    }
  }

  // Create instances
  const person = new Person("Dulan", 24);
  const student = new Student("Etu", 20, "Computer Science");

  // Calling introduce method
  person.introduce();
  student.introduce();
