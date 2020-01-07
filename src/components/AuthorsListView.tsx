import React from "react";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import { CardContent, Typography } from "@material-ui/core";

type Props = {
  getAuthors: () => Array<any>;
};

function AuthorListView({ getAuthors }: Props) {
  let items = getAuthors() || [];
  items = items.map(author => (
    <TableRow key={author.id}>
      <TableCell>
        <Link to={`/authors/${author.id}`}>{author.name}</Link>
      </TableCell>
      <TableCell>{author.byear}</TableCell>
      <TableCell>{author.booksCount}</TableCell>
    </TableRow>
  ));

  return (
    <CardContent>
      <Typography variant="h4" gutterBottom>
        Список авторов
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Имя автора</TableCell>
              <TableCell>Год рождения</TableCell>
              <TableCell>Количество книг</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{items}</TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  );
}

export default AuthorListView;
