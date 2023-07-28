/* 

Object-Oriented Programming (OOP) is a programming paradigm that focuses on organizing code and data into objects. JavaScript, although primarily known as a prototype-based language, also supports OOP concepts through its object-oriented features. In JavaScript, you can create and work with objects, classes, inheritance, and encapsulation. Let's explore these concepts:

1. Objects: In JavaScript, an object is a collection of key-value pairs, where values can be primitive data types (e.g., numbers, strings, booleans) or even other objects or functions. Objects can represent real-world entities or abstract concepts.

```javascript
// Example object representing a person
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
  greet: function () {
    console.log("Hello, I'm " + this.name);
  },
};
```

2. Classes: In modern JavaScript, you can define classes using the `class` keyword. A class is a blueprint for creating objects with specific properties and methods. It provides a way to define the structure and behavior of objects of the same type.

```javascript
class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  greet() {
    console.log("Hello, I'm " + this.name);
  }
}

// Creating an instance of the Person class
const john = new Person("John Doe", 30, "Software Engineer");
john.greet();
```

3. Inheritance: JavaScript supports prototypal inheritance. You can create subclasses that inherit properties and methods from a parent class. This allows you to reuse code and establish an "is-a" relationship between objects.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

const doggo = new Dog("Buddy");
doggo.makeSound(); // Output: "Woof!"
```

4. Encapsulation: While JavaScript doesn't have built-in access modifiers like other object-oriented languages, you can achieve encapsulation by using closures or symbols to hide private data or methods. This helps in controlling access to certain properties or methods of an object.

```javascript
const Person = (function () {
  const privateData = new WeakMap();

  class Person {
    constructor(name, age) {
      privateData.set(this, { name, age });
    }

    getName() {
      return privateData.get(this).name;
    }

    getAge() {
      return privateData.get(this).age;
    }
  }

  return Person;
})();

const john = new Person("John Doe", 30);
console.log(john.getName()); // Output: "John Doe"
console.log(john.getAge()); // Output: 30
```

In summary, object-oriented programming in JavaScript involves creating objects, defining classes, establishing inheritance relationships, and using encapsulation techniques to organize and structure your code effectively. Keep in mind that JavaScript's approach to OOP is based on prototypes, which may differ from classical OOP languages like Java or C++.

*/
