class Book {
    id: number;
    title: string;
    author: string;
    stock: number;
    status: string;
constructor(id: number, title: string, author: string, stock: number, status: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.stock = stock;
    this.status = status;
  }
}
class Member {
  id: number;
  name: string;
  contact: string;
  books: Book[];
  status: string;
constructor(id: number, name: string, contact: string, books: Book[], status: string) {
  this.id = id;
  this.name = name;
  this.contact = contact;
  this.books = books;
  this.status = status;
  }
}
class LendedBook {
  memberId: number;
  bookId: number;
  dueDate: string;
constructor(memberId: number, bookId: number, dueDate: string) {
  this.memberId = memberId;
  this.bookId = bookId;
  this.dueDate = dueDate;
  }
}
class Library {
  books: Book[];
  members: Member[];
constructor() {
  this.books = [];
  this.members = [];
}
addBook(book: Book): void {
  this.books.push(book);
}
showBooks(): void {
  console.log("Sách trong thư viện:");
  this.books.forEach((book) => {
  console.log(`ID: ${book.id}, Tên sách: ${book.title}, Tác giả: ${book.author}, Số lượng: ${book.stock}`);
  });
}
}