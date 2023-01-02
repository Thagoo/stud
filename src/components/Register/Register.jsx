import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uname, setUname] = useState("");
  const [course, setCourse] = useState("");
  const [sem, setSem] = useState("");
  const [passwd, setPasswd] = useState("");
  const [cpasswd, setCpasswd] = useState("");
  const [user, setUser] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { fname, lname, uname, course, sem, passwd, cpasswd };

    if (user.passwd !== user.cpasswd) {
      alert("Password don't match");
    } else {
      const response = await axios.post("/register", user);
      if (response.data == "exist") {
        alert(user.uname + " already exist try different username");
      } else {
        alert(user.uname + " Account Succesfully created please login");
        window.href("/");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          onChange={({ target }) => setFname(target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          id="lname"
          onChange={({ target }) => setLname(target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="uname">User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="User Name"
          id="uname"
          onChange={({ target }) => setUname(target.value)}
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
          value={course}
          onChange={({ target }) => setCourse(target.value)}
        >
          <option value=""> Select Course</option>
          <option value="bca"> Bachelor of Computer Applications</option>
          <option value="bcom"> Bachelor of Commerce</option>
          <option value="ba"> Bachelor of Arts</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>
          Select Semester
          <br />
        </Form.Label>
        <Form.Select
          id="sem"
          value={sem}
          onChange={({ target }) => setSem(target.value)}
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
          onChange={({ target }) => setPasswd(target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="passwd">Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          id="cpasswd"
          onChange={({ target }) => setCpasswd(target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Button
          style={{ width: `100%` }}
          type="submit"
          variant="outline-primary"
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Register;
