import React from "react";
import axios from "axios";

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
      const response = await axios.post(
        "http://localhost:8000/register",
        this.state
      );
      if (response.data == "exist") {
        alert(uname + " already exist try different username");
      } else {
        alert(uname + " Account Succesfully created please login");
      }
    }
  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            id="fname"
            onChange={(e) => this.setState({ fname: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            id="lname"
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="uname">User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            id="uname"
            onChange={(e) => this.setState({ uname: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label>
            {" "}
            Select Course
            <br />
          </label>
          <select
            id="course"
            value={this.state.value}
            className="form-control"
            onChange={(e) => this.setState({ course: e.target.value })}
          >
            <option value=""> Select Course</option>
            <option value="bca"> Bachelor of Computer Applications</option>
            <option value="bcom"> Bachelor of Commerce</option>
            <option value="ba"> Bachelor of Arts</option>
          </select>
        </div>
        <div className="mb-3">
          <label>
            {" "}
            Select Semester
            <br />
          </label>
          <select
            id="sem"
            value={this.state.value}
            className="form-control"
            onChange={(e) => this.setState({ sem: e.target.value })}
          >
            <option value=""> Select Semester</option>
            <option value="1"> 1st Semester</option>
            <option value="2"> 2nd Semester</option>
            <option value="3"> 3rd Semester</option>
            <option value="4"> 4th Semester</option>
            <option value="5"> 5th Semester</option>
            <option value="6"> 6th Semester</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="passwd">Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            id="passwd"
            onChange={(e) => this.setState({ passwd: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwd">Confirm Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Confirm Password"
            id="cpasswd"
            onChange={(e) => this.setState({ cpasswd: e.target.value })}
            required
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Register;
