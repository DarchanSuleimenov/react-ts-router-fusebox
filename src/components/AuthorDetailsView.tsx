import React from "react";
import { useParams, Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import {
  Button,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core";

type Props = {
  getAuthorInfo: (id: string | undefined) => any;
  getBooksByAuthor: (id: string | undefined) => Array<any>;
};

function AuthorDetailsView({ getAuthorInfo, getBooksByAuthor }: Props) {
  const { id } = useParams();

  const author = getAuthorInfo(id);
  let authorInfo: JSX.Element | string = "Автор не найден!";
  let booksInfo: JSX.Element | string = "книг нет";

  if (author) {
    const books = getBooksByAuthor(author.id);
    if (books.length > 0) {
      const booksList = books.map(book => (
        <TableRow key={book.id}>
          <TableCell>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </TableCell>
          <TableCell>{book.genre}</TableCell>
          <TableCell>{book.year}</TableCell>
        </TableRow>
      ));
      booksInfo = (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Жанр</TableCell>
                <TableCell>Год издания</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{booksList}</TableBody>
          </Table>
        </TableContainer>
      );
    }
    authorInfo = (
      <div>
        <Typography variant="h4" gutterBottom>
          Информация об авторе
        </Typography>
        <p>
          Имя: {author.name}
          <br />
          Год рождения: {author.byear}
          <br />
        </p>
        Книги автора:&nbsp;
        {booksInfo}
      </div>
    );
  }

  return (
    <>
      <CardContent>{authorInfo}</CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/authors">К списку авторов</Link>
        </Button>
      </CardActions>
    </>
  );
}

export default AuthorDetailsView;
