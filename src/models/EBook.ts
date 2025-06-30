import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";
import { Book } from "./Book";

export class EBook extends AbstractBook {
  private author: Author;
  private url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year);
    this.author = author;
    this.url = url;
    author.addBook(this as unknown as Book);
  }

  getAuthor(): Author {
    return this.author;
  }

  getUrl(): string {
    return this.url;
  }

  getDescription(): string {
    return `EBook: ${this.title}, Year: ${this.year}, Author: ${this.author.getName()}, URL: ${this.url}`;
  }
}
