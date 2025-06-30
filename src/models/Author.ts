import { Book } from "./Book";

export class Author {
  private name: string;
  private books: Book[] = [];

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBooks(): Book[] {
    return [...this.books];
  }
}
