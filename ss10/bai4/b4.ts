class Vehicle4 {
    name: string;
    year: number;
    company: string;
    id: number;
constructor(name: string, year: number, company: string, id: number) {
    this.name = name;
    this.year = year;
    this.company = company;
    this.id = id;
    }
printInfo(): void {
    console.log("Name:", this.name);
    console.log("Year:", this.year);
    console.log("Company:", this.company);
    console.log("ID:", this.id);
    }
}
let vehicle4 = new Vehicle4("exciter", 2019, "02318", 18);
vehicle4.printInfo();