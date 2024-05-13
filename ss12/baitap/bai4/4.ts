class Product {
    protected name: string;
    protected id: number;
  
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  
    printInfo(): void {
      console.log(`Product Name: ${this.name}`);
      console.log(`Product ID: ${this.id}`);
    }
  }
  
  class Electronic extends Product {
    private brand: string;
  
    constructor(name: string, id: number, brand: string) {
      super(name, id);
      this.brand = brand;
    }
  
    printInfo(): void {
      super.printInfo();
      console.log(`Brand: ${this.brand}`);
    }
  }
  
  class Book extends Product {
    private author: string;
  
    constructor(name: string, id: number, author: string) {
      super(name, id);
      this.author = author;
    }
  
    printInfo(): void {
      super.printInfo();
      console.log(`Author: ${this.author}`);
    }
  }
  
  const electronicProduct: Product = new Electronic("ĐIện thoại", 1, "Redme");
  const bookProduct: Product = new Book("Doraemon", 2, "Fukuoki");
  
  electronicProduct.printInfo();
  console.log("...");
  bookProduct.printInfo();