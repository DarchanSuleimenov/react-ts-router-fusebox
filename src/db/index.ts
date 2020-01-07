import { Author } from "../models/Author";
import { Book } from "../models/Book";

const authors: Array<Author> = [
  { id: 0, name: "Karl Lieblich", byear: "1969" },
  { id: 1, name: "Samuel Atkinson", byear: "1953" },
  { id: 2, name: "Margaret Stanovich", byear: "1982" },
  { id: 3, name: "Jojo Moyes", byear: "1972" }
];

const books: Array<Book> = [
  {
    id: 0,
    title: "The Testaments",
    year: "1992",
    genre: "horror",
    authorid: 0
  },
  {
    id: 1,
    title: "Girl, Stop Apologizing",
    year: "1997",
    genre: "fiction",
    authorid: 0
  },
  {
    id: 2,
    title: "A Minute to Midnight",
    year: "2003",
    genre: "drama",
    authorid: 0
  },
  {
    id: 3,
    title: "The Starless Sea",
    year: "1975",
    genre: "horror",
    authorid: 1
  },
  {
    id: 4,
    title: "Diary of a Wimpy Kid",
    year: "1977",
    genre: "fiction",
    authorid: 1
  },
  {
    id: 5,
    title: "The Giver of Stars",
    year: "2005",
    genre: "drama",
    authorid: 2
  },
  {
    id: 6,
    title: "The Silent Patient",
    year: "1995",
    genre: "fantasy",
    authorid: 3
  },
  {
    id: 7,
    title: "Cirss Cross Adventures",
    year: "2013",
    genre: "drama",
    authorid: 3
  }
];

interface AuthorExt extends Author {
  booksCount: number;
}

type AuthorsListExt = Array<AuthorExt>;

type IDType = string | number | undefined;

export const getAuthors = (): AuthorsListExt =>
  authors.map(author => ({
    ...author,
    booksCount: getBooksByAuthor(author.id).length
  }));

export const getAuthorInfo = (id: IDType): Author | boolean | undefined => {
  if (typeof id === "string") {
    id = parseInt(id);
    if (isNaN(id)) return false;
  }
  return authors.find(item => item.id === id);
};

export const getBooks = (): Array<Book> => books;

export const getBooksByAuthor = (authorid: IDType): Array<Book> => {
  if (typeof authorid === "string") {
    authorid = parseInt(authorid);
    if (isNaN(authorid)) return [];
  }
  return books.filter(book => book.authorid === authorid);
};

export const getBookInfo = (id: IDType): Book | boolean | undefined => {
  if (typeof id === "string") {
    id = parseInt(id);
    if (isNaN(id)) return false;
  }
  return books.find(item => item.id === id);
};
