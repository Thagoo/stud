import Navbar from "../Navbar/Navbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function Home() {
  const [newsData, setNewsData] = useState([]);
  const services = async () => {
    const NewsApi = await axios.get("http://localhost:8000/envapi");
    const response = await axios.get(NewsApi.data);
    setNewsData(response.data.articles);
    console.log(newsData);
  };

  useEffect(() => {
    services();
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-bg">
        <center>
          <h1 className="news-title">Technology News</h1>
        </center>

        <Container>
          <Row md={2} xs="auto">
            {newsData.map((article, i) => (
              <Col sm={2} key={i}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
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
            {newsData.map((article, j) => (
              <Col sm={2} key={j}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
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
        </Container>
      </div>
    </>
  );
}

export default Home;
