import React from "react";
import Navbar from "../../Navbar/Navbar";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Container, Tabs } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function StudyMaterials() {
  return (
    <>
      <Navbar />
      <Container>
        <h1 style={{ textAlign: `center` }}>
          Study Materials <br />
          <br />
        </h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="bca">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="bca">B.C.A</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bcom">B.Com</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="ba">B.A</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="bca">
                  <Tabs
                    defaultActiveKey="5"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                  >
                    <Tab eventKey="1" title="1st Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="2" title="2nd Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="3" title="3rd Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="4" title="4th Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="5" title="5th Semester">
                      <h1 style={{ fontSize: `25px`, textAlign: `center` }}>
                        Question Papers
                      </h1>
                      <ListGroup>
                        <ListGroup.Item
                          action
                          href="https://www.spmcollege.ac.in/questionpapers/Question-paper-2021/BCA/V-Sem/Computer-Architecture.pdf"
                        >
                          Computer Archtecture
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          href="https://www.spmcollege.ac.in/questionpapers/Question-paper-2021/BCA/V-Sem/Data-Communication-and-Networks.pdf"
                        >
                          Data-Communication and Networks
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          href="https://www.spmcollege.ac.in/questionpapers/Question-paper-2021/BCA/V-Sem/Java-Programming.pdf"
                        >
                          Java Programming
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          href="https://www.spmcollege.ac.in/questionpapers/Question-paper-2021/BCA/V-Sem/Microprocessor-and-Assembly-Language.pdf"
                        >
                          Microprocessor and Assembly language
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          href="https://www.spmcollege.ac.in/questionpapers/Question-paper-2021/BCA/V-Sem/Software-Engineering.pdf"
                        >
                          Software Engineering
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab>
                    <Tab eventKey="6" title="6th Semester">
                      <h1>Hello</h1>
                    </Tab>
                  </Tabs>
                </Tab.Pane>
                <Tab.Pane eventKey="bcom">
                  <Tabs
                    defaultActiveKey="1"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                  >
                    <Tab eventKey="1" title="1st Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="2" title="2nd Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="3" title="3rd Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="4" title="4th Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="5" title="5th Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="6" title="6th Semester">
                      <h1>Hello</h1>
                    </Tab>
                  </Tabs>
                </Tab.Pane>
                <Tab.Pane eventKey="ba">
                  <Tabs
                    defaultActiveKey="1"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                  >
                    <Tab eventKey="1" title="1st Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="2" title="2nd Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="3" title="3rd Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="4" title="4th Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="5" title="5th Semester">
                      <h1>Hello</h1>
                    </Tab>
                    <Tab eventKey="6" title="6th Semester">
                      <h1>Hello</h1>
                    </Tab>
                  </Tabs>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}
export default StudyMaterials;
