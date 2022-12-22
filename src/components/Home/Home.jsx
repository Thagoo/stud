import Navbar from "../Navbar/Navbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import articles from "./news.json";

function Home() {
  const [newsData, setNewsData] = useState([]);
  const services = async () => {
    setNewsData(articles.articles);
  };

  useEffect(() => {
    services();
  }, []);

  return (
    <>
      <Navbar />
      <center>
        <h1>Latest News</h1>
      </center>
      <Container>
        <Row>
          <Col lg={16}>
            <Row md={2} xs="auto">
              {newsData.map((article, i) => (
                <Col sm={2} key={i}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card hoverable="true">
                      <Card.Img variant="top" src={article.urlToImage} />
                      <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{article.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              ))}
            </Row>
            <Row md={2} xs="auto">
              {newsData.map((article, j) => (
                <Col sm={2} key={j}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card hoverable="true">
                      <Card.Img variant="top" src={article.image} />
                      <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{article.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
