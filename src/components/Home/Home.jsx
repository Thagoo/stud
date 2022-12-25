import NavbarHeader from "../Navbar/Navbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";
import articles from "./news.json";
import Discuss from "./../Discuss/DiscussHome";
import { PropaneSharp } from "@mui/icons-material";

function Home(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newsData, setNewsData] = useState([]);
  const services = async () => {
    //const NewsApi = await axios.get("/envapi");
    //const response = await axios.get(NewsApi.data);
    setNewsData(articles.articles);
  };

  useEffect(() => {
    console.log(show);
    services();
  }, []);

  return (
    <div>
      <NavbarHeader handleShow={handleShow} />

      <Discuss
        show={show}
        username={props.username}
        room={props.room}
        setRoom={props.setRoom}
        socket={props.socket}
        handleClose={handleClose}
      />
      <div className="home-bg">
        <Container className="news-container">
          <center>
            <h1 className="news-title">Technology News</h1>
          </center>
          <Row md={2} xs="auto">
            {newsData.map((article, i) => (
              <Col sm={2} key={i}>
                <a
                  clasName="article-anch"
                  style={{ color: `#5d5d5d`, textDecoration: `none` }}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card hoverable="true" className="news-cards">
                    <Card.Img variant="top" src={article.urlToImage} />
                    <Card.Body>
                      <Card.Title>{article.title}</Card.Title>
                      <Card.Text>{article.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
            {newsData.map((article, i) => (
              <Col sm={2} key={i}>
                <a
                  clasName="article-anch"
                  style={{ color: `#5d5d5d`, textDecoration: `none` }}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card hoverable="true" className="news-cards">
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
        </Container>
      </div>
    </div>
  );
}

export default Home;
