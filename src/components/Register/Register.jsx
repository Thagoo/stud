import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      uname: "",
      course: "",
      sem: "",
      passwd: "",
      cpasswd: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, lname, uname, course, sem, passwd, cpasswd } = this.state;
    console.log(course, sem);
    if (passwd !== cpasswd) {
      alert("Password don't match");
    } else {
      const response = await axios.post("/register", this.state);
      if (response.data == "exist") {
        alert(uname + " already exist try different username");
      } else {
        alert(uname + " Account Succesfully created please login");
      }
    }
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            onChange={(e) => this.setState({ fname: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            id="lname"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="uname">User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Name"
            id="uname"
            onChange={(e) => this.setState({ uname: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            {" "}
            Select Course
            <br />
          </Form.Label>
          <Form.Select
            id="course"
            value={this.state.value}
            onChange={(e) => this.setState({ course: e.target.value })}
          >
            <option value=""> Select Course</option>
            <option value="bca"> Bachelor of Computer Applications</option>
            <option value="bcom"> Bachelor of Commerce</option>
            <option value="ba"> Bachelor of Arts</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            {" "}
            Select Semester
            <br />
          </Form.Label>
          <Form.Select
            id="sem"
            value={this.state.value}
            onChange={(e) => this.setState({ sem: e.target.value })}
          >
            <option value=""> Select Semester</option>
            <option value="1"> 1st Semester</option>
            <option value="2"> 2nd Semester</option>
            <option value="3"> 3rd Semester</option>
            <option value="4"> 4th Semester</option>
            <option value="5"> 5th Semester</option>
            <option value="6"> 6th Semester</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="passwd">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            id="passwd"
            onChange={(e) => this.setState({ passwd: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="passwd">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            id="cpasswd"
            onChange={(e) => this.setState({ cpasswd: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Button
            style={{ width: `100%` }}
            type="submit"
            variant="outline-secondary"
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default Register;
