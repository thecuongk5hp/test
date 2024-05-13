class Person {
    private name: string;
    private age: number;
constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
}
public getName(): string {
    return this.name;
}

public setName(newName: string): void {
    this.name = newName;
}
public getAge(): number {
    return this.age;
}
public setAge(newAge: number): void {
    this.age = newAge;
}
public describe(): void {
    console.log("Tên:", this.name);
    console.log("Tuổi:", this.age);
    }
}
let person = new Person("Nguyễn Thế Cường", 18);
person.describe();
person.setName("Nguyễn Kim Anh");
person.setAge(10);
console.log("Cập nhật:");
person.describe();