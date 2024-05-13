class Animal {
    protected name: string;
    constructor(name: string) {
    this.name = name;
}
    makeNoise(): void {
    console.log("Đối tượng không phải mèo hoặc chó.");
}
    printName(): void {
    console.log(`Tên của con vật: ${this.name}`);
}
}
    class Cat {
    private animal: Animal;
    constructor(name: string) {
    this.animal = new Animal(name);
}
    makeNoise(): void {
    console.log("Meo meo");
}
    printName(): void {
    this.animal.printName();
}
}
    class Dog {
    private animal: Animal;
    constructor(name: string) {
    this.animal = new Animal(name);
}
    makeNoise(): void {
      console.log("...");
    }
    printName(): void {
      this.animal.printName();
    }
  }
  let cat = new Cat("Mèo ...");
  cat.printName();
  cat.makeNoise();
  let dog = new Dog("Chó loli");
  dog.printName();
  dog.makeNoise();