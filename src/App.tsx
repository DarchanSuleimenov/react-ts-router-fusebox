import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import * as db from "./db";
import AuthorsListView from "./components/AuthorsListView";
import AuthorDetailsView from "./components/AuthorDetailsView";
import BookDetailsView from "./components/BookDetailsView";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Typography
} from "@material-ui/core";

function App() {
  const getAuthors = db.getAuthors;
  const getAuthorInfo = db.getAuthorInfo;
  const getBooksByAuthor = db.getBooksByAuthor;
  const getBookInfo = db.getBookInfo;

  return (
    <Router>
      <Container maxWidth="md">
        <Typography variant="h1" component="h2">
          Авторы и книги
        </Typography>
        <Divider />
        <Card>
          <Switch>
            <Route exact path={["/", "/authors"]}>
              <AuthorsListView getAuthors={getAuthors} />
            </Route>
            <Route path="/authors/:id">
              <AuthorDetailsView
                getAuthorInfo={getAuthorInfo}
                getBooksByAuthor={getBooksByAuthor}
              />
            </Route>
            <Route path="/books/:id">
              <BookDetailsView
                getBookInfo={getBookInfo}
                getAuthorInfo={getAuthorInfo}
              />
            </Route>
            <Route
              path="*"
              render={() => (
                <>
                  <CardContent>
                    <Typography variant="h4">Страница не найдена...</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link to="/">Вернуться на главную</Link>
                    </Button>
                  </CardActions>
                </>
              )}
            />
          </Switch>
        </Card>
      </Container>
    </Router>
  );
}

export default App;
