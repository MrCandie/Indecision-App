class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
  hasMajor() {
    return this.job ? true : false;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` and their major is ${this.job}`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.location)
      greeting = `Hi I am ${this.name}. I am visiting from ${this.location}`;

    return greeting;
  }
}

const me = new Traveller("candie", 22, "Lagos");
const other = new Traveller();

console.log(me.getGreeting());
console.log(other.getGreeting());
