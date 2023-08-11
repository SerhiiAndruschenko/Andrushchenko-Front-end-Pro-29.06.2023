class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  getInfo(){
    console.log(`Name: ${this.name}
    Age: ${this.age}`);
  }

}

class Car {
  constructor(brand, model, year, carNumber){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.carNumber = carNumber;
  }

  setOwner(owner){
    if(owner.age >= 18){
      this.owner = owner;
    } else {
      console.log('The owner must be over 18 years old.');
    }
  } 

  getInfo(){
    console.log(`Brand: ${this.brand}
    Model: ${this.model}
    Year: ${this.year}
    Car number: ${this.carNumber}`);

    if(this.owner){
      console.log('Owner:');
      this.owner.getInfo();
    } else {
      console.log('The car has no owner');
    }

  }

}

const person1 = new Person('John', 20);
const person2 = new Person('Matt', 30);
const person3 = new Person('Jake', 16);

const car1 = new Car('Volkswagen', 'Golf', 2018, '3GDY565');
const car2 = new Car('Hyundai', 'Sonata', 2020, '8AAX795');
const car3 = new Car('Ford', 'Fusion', 2016, 'WCP018');

car1.setOwner(person1);
car2.setOwner(person2);
car3.setOwner(person3);

car1.getInfo();
car2.getInfo();
car3.getInfo();