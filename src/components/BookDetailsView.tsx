import React from "react";
import { useParams, Link } from "react-router-dom";

import {
  Button,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core";

type Props = {
  getBookInfo: (id: string | undefined) => any;
  getAuthorInfo: (id: string | undefined) => any;
};

function BookDetailsView({ getBookInfo, getAuthorInfo }: Props) {
  const { id } = useParams();
  const book = getBookInfo(id);
  let bookInfo: JSX.Element | string = "Книга не найдена!";
  let authorInfo = null;

  if (book) {
    const author = getAuthorInfo(book.authorid);
    bookInfo = (
      <div>
        <Typography variant="h4" gutterBottom>
          Информация о книге
        </Typography>

        <p>
          Название: {book.title}
          <br />
          Год издания: {book.year}
          <br />
          Жанр: {book.genre}
          <br />
          автор: {author ? author.name : "неизвестен"}
        </p>
      </div>
    );
    if (author) {
      authorInfo = (
        <Button size="small" color="primary">
          <Link to={`/authors/${book.authorid}`}>Об авторе</Link>
        </Button>
      );
    }
  }

  return (
    <>
      <CardContent>{bookInfo}</CardContent>
      <CardActions>
        {authorInfo}

        <Button size="small" color="primary">
          <Link to="/authors">К списку авторов</Link>
        </Button>
      </CardActions>
    </>
  );
}

export default BookDetailsView;
