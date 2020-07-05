import React, {useState, useContext} from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import {getBooks,saveBook} from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import {userContext} from "../utils/appContext";
import Nav from "../components/Nav";

export default ()=> { 
  const {user} = useContext(userContext)
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("");
  console.log(user)
  const handleSearch = (e) => {
    e.preventDefault()
    getBooks(search).then(({data}) => {
      console.log(data)
      setBooks(data)})
  };

  const handleBookSave = book => saveBook(book, user._id)

      return (
        <Container>
          <Nav/>
          
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1 className="text-center">
                  <strong>(React) Google Books Search</strong>
                </h1>
                <h2 className="text-center">Search for and Save Books of Interest.</h2>
              </Jumbotron>
            </Col>
            <Col size="md-12">
              <Card title="Book Search" icon="far fa-book">
                <Form
                  onChange={setSearch}
                  handleFormSubmit={handleSearch}
                  q={search}
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Card title="Results">
                  <List>
                    {books.map(book => (
                      <Book
                        key={book.id}
                        title={book.volumeInfo.title}
                        subtitle={book.volumeInfo.subtitle}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors.join(", ")}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        Button={() => (
                          <button
                            onClick={() => handleBookSave(book)}
                            className="btn btn-primary ml-2"
                          >
                            Save
                          </button>
                        )}
                      />
                    ))}
                  </List>
              </Card>
            </Col>
          </Row>
        </Container>
      );
  }