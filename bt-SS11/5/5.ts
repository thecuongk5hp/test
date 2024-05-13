class Animal {
    private name5: string;
    protected age5: number;

    constructor(name: string, age: number) {
        this.name5 = name;
        this.age5 = age;
    }

    public introduce(): void {
        console.log(`Tôi là ${this.name5} và tôi ${this.age5} tuổi.`);
    }
}

class Dog extends Animal {
    private breed5: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed5 = breed;
    }

    public displayInfo(): void {
        console.log(`${this.name5} là ${this.breed5} và nó ${this.age5} tuổi.`);
    }

    public changeName(newName: string): void {
        this.name5 = newName;
    }
}

const dog = new Dog("GG", 5, "Labrador");
dog.introduce();
dog.displayInfo();
console.log(dog.name5)
console.log(dog.age5);
