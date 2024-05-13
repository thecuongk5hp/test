abstract class Animal {
    abstract makeSound(): void;
  
    move(): void {
      console.log("Moving along!");
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
      console.log("Woof! Woof!");
    }
  }
  
  class Cat extends Animal {
    makeSound(): void {
      console.log("Meow! Meow!");
    }
  }
  function performAction(animal: Animal) {
    animal.makeSound();
    animal.move();
  }
  const dog = new Dog();
  const cat = new Cat();
  
  performAction(dog);
  performAction(cat);
  